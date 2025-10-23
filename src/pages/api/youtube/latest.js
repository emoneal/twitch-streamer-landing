// pages/api/youtube/latest.js
export default async function handler(req, res) {
  const key = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;


  if (!key || !channelId) {
    return res.status(500).json({ error: 'Missing YOUTUBE_API_KEY or YOUTUBE_CHANNEL_ID' });
  }

  try {
    // 1) Get uploads playlist id
    const channelsURL = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${key}`;
    const channelRes = await fetch(channelsURL);
    const channelJson = await channelRes.json();

    if (!channelRes.ok) {
      console.error('[YT] channels error:', JSON.stringify(channelJson, null, 2));
      return res.status(502).json({ error: 'YouTube channels API error', details: channelJson });
    }

    const uploads =
      channelJson?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
    if (!uploads) {
      console.warn('[YT] no uploads playlist found for channel', channelId);
      res.setHeader('Cache-Control', 'no-store');
      return res.status(200).json({ videos: [] });
    }

    // 2) Fetch latest items (3 most recent)
    const itemsURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=3&playlistId=${uploads}&key=${key}`;
    const itemsRes = await fetch(itemsURL);
    const itemsJson = await itemsRes.json();

    if (!itemsRes.ok) {
      console.error('[YT] playlistItems error:', JSON.stringify(itemsJson, null, 2));
      return res.status(502).json({ error: 'YouTube playlistItems API error', details: itemsJson });
    }

    const videos = (itemsJson.items || [])
      .map((it) => ({
        id: it?.snippet?.resourceId?.videoId,
        title: it?.snippet?.title,
        thumb: it?.snippet?.thumbnails?.medium?.url,
        publishedAt: it?.snippet?.publishedAt,
      }))
      .filter((v) => !!v.id);

    // Edge cache (10 min) + allow stale while revalidating
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=600');
    return res.status(200).json({ videos });
  } catch (err) {
    console.error('[YT] fatal:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
