'use client';
import { useEffect, useState } from 'react';

export default function YouTubeLatest() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch('/api/youtube/latest');
        const data = await res.json();

        if (!res.ok || data.error) {
          throw new Error(data.error || 'Failed to fetch videos');
        }

        setVideos(data.videos || []);
      } catch (err) {
        console.error('YouTube fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <section id="videos" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Latest uploads</h2>
        <div className="rounded-2xl bg-black/40 border border-white/10 p-6 text-white/60">
          Loading…
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="videos" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Latest uploads</h2>
        <div className="rounded-2xl bg-rose-900/30 border border-rose-500/30 p-4 text-rose-200">
          {error}
        </div>
      </section>
    );
  }

  if (!videos.length) {
    return (
      <section id="videos" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Latest uploads</h2>
        <div className="text-white/60">No recent videos found.</div>
      </section>
    );
  }

  return (
    <section id="videos" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">Latest uploads</h2>
        <a
          href="https://www.youtube.com/@PixelEmii/videos"
          target="_blank"
          rel="noreferrer"
          className="text-sm underline text-white/70 hover:text-white"
        >
          See all
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {videos.map((v) => (
          <div key={v.id} className="rounded-2xl bg-black/40 border border-white/10 overflow-hidden hover:scale-[1.02] transition-transform">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="p-3 text-sm text-white/80 line-clamp-2">{v.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
