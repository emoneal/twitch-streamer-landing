import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TopClipsCarousel = () => {
  const [topClipsData, setTopClipsData] = useState([]);
  const [activeClip, setActiveClip] = useState(null); // Track the active clip
  const [muted, setMuted] = useState(true); // Mute the video initially
  const clipsPerPage = 5;

  useEffect(() => {
    const fetchTopClips = async () => {
      try {
        const response = await fetch(`/api/top-clips`);
        if (response.ok) {
          const clips = await response.json();

          // Sort clips by view_count (descending order)
          const sortedClips = [...clips].sort((a, b) => b.view_count - a.view_count);

          setTopClipsData(sortedClips);
          setActiveClip(sortedClips[0]?.id); // Set the first clip (most viewed) as the active clip
        } else {
          throw new Error('Failed to fetch top clips');
        }
      } catch (error) {
        console.error('Error fetching top clips:', error);
      }
    };

    fetchTopClips();
  }, []);

  const handleThumbnailClick = (clipId, event) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveClip(clipId);
    setMuted(false); // Unmute when clicked
  };

  return (
    <div className="container mx-auto p-4">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        centerMode={false}
        className="custom-carousel"
        swipeable
        emulateTouch
        selectedItem={topClipsData.findIndex((clip) => clip.id === activeClip)} // Ensure carousel starts at active clip
        onClickItem={() => setActiveClip(topClipsData[0]?.id)} // Reset to first clip on item click
      >
        {topClipsData.map((clip, index) => (
          <div key={clip.id} className="flex justify-center items-center w-full">
            {activeClip === clip.id ? (
              <iframe
                src={`https://clips.twitch.tv/embed?clip=${clip.id}&parent=www.pixelcafe.moe`}
                title={`Top Clip ${index + 1}`}
                allowFullScreen
                className="w-full"
                style={{ height: '500px' }}
                muted={muted} // Mute the video initially
                frameBorder="0"
              ></iframe>
            ) : (
              <div className="clip-thumbnail-wrapper" onClick={(e) => handleThumbnailClick(clip.id, e)}>
                <img
                  src={clip.thumbnail_url}
                  alt={`Clip ${index + 1}`}
                  className="w-full h-full"
                />
                <div className="clip-title">{clip.title}</div>
                <div className="play-button" style={{ backgroundColor: 'transparent' }}>▶</div>
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TopClipsCarousel;
