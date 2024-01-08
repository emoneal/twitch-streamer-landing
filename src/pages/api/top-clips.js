import fetch from 'node-fetch';

const clientId = process.env.TWITCH_CLIENT_ID;
const clientSecret = process.env.TWITCH_CLIENT_SECRET;
const broadcasterId = process.env.BROADCASTER_ID;

let cachedToken = null;
let tokenExpiry = null;

async function refreshToken() {
    if (cachedToken && tokenExpiry && new Date() < tokenExpiry) {
        return cachedToken;
    }

    const tokenResponse = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`, {
        method: 'POST'
    });

    if (!tokenResponse.ok) {
        throw new Error('Failed to refresh token');
    }

    const tokenData = await tokenResponse.json();
    const expiresIn = tokenData.expires_in - 60;
    tokenExpiry = new Date(new Date().getTime() + expiresIn * 1000);
    cachedToken = tokenData.access_token;

    return cachedToken;
}

async function fetchClips(token) {
    const response = await fetch(`https://api.twitch.tv/helix/clips?broadcaster_id=${broadcasterId}&first=20`, {
        headers: {
            'Client-ID': clientId,
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch clips');
    }

    const data = await response.json();
    return data.data.sort((a, b) => b.view_count - a.view_count);
}

export default async function handler(req, res) {
    try {
        const token = await refreshToken();
        const clips = await fetchClips(token);

        // Sort clips by view count in descending order
        clips.sort((a, b) => b.view_count - a.view_count);

        res.status(200).json(clips);
    } catch (error) {
        console.error('Error in /api/top-clips:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
