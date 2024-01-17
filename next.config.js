/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)', // Apply CSP to all routes
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self' localhost clips.twitch.tv; script-src 'self' localhost scripts.example.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: clips-media-assets2.twitch.tv;",
          },
        ],
      },
    ];
  },
  images: {
    domains: ['clips-media-assets2.twitch.tv'],
  },
};

module.exports = nextConfig;
