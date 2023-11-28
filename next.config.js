/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async headers() {
      return [
        {
          source: '/(.*)', // Apply CSP to all routes
          headers: [
            {
              key: 'Content-Security-Policy',
              value:
                "default-src 'self' localhost clips.twitch.tv; script-src 'self' localhost scripts.example.com 'unsafe-eval';",
            },
          ],
        },
      ];
    },
  };
  

module.exports = nextConfig
