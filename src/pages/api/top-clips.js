// Import fetch from node-fetch as an ES module
import fetch from 'node-fetch';

// Twitch API credentials
const clientId = process.env.TWITCH_CLIENT_ID;
const clientSecret = process.env.TWITCH_CLIENT_SECRET;

// Function to refresh the OAuth token
async function refreshToken() {
  const tokenResponse = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`, {
    method: 'POST'
  });
  const tokenData = await tokenResponse.json();
  return tokenData.access_token; // Return the new token
}

// Function to fetch clips
async function fetchClips(token, broadcasterId) {
  const response = await fetch(`https://api.twitch.tv/helix/clips?broadcaster_id=${broadcasterId}&first=20`, {
    headers: {
      'Client-ID': clientId,
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    if (response.status === 401) { // Token expired or invalid
      throw new Error('TokenExpired');
    }
    throw new Error('Failed to fetch clips');
  }

  const data = await response.json();
  return data.data.sort((a, b) => b.view_count - a.view_count);
}

export default async function handler(req, res) {
  try {
    const broadcasterId = '45141743'; // Replace with your broadcaster ID
    let token = await refreshToken(); // Initially get a token

    try {
      const clips = await fetchClips(token, broadcasterId);
      res.status(200).json(clips);
    } catch (error) {
      if (error.message === 'TokenExpired') {
        // Refresh the token and retry
        token = await refreshToken();
        const clips = await fetchClips(token, broadcasterId);
        res.status(200).json(clips);
      } else {
        throw error;
      }
    }
  } catch (error) {
    console.error('Error in top-clips API route:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
