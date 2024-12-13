import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TopClipsCarousel = () => {
  const [topClipsData, setTopClipsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeClip, setActiveClip] = useState(null); // Holds the currently active clip

  const clipsPerPage = 5;

  useEffect(() => {
    const fetchTopClips = async () => {
      try {
        const response = await fetch(`/api/top-clips?page=${currentPage}&perPage=${clipsPerPage}`);
        if (response.ok) {
          const clips = await response.json();
          setTopClipsData((prevData) => {
            const combinedData = [...prevData, ...clips];
            // Sort by view count in descending order
            return combinedData.sort((a, b) => b.view_count - a.view_count);
          });
        } else {
          throw new Error('Failed to fetch top clips');
        }
      } catch (error) {
        console.error('Error fetching top clips:', error);
      }
    };

    fetchTopClips();
  }, [currentPage]);

  const handlePageChange = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleThumbnailClick = (clipId, event) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveClip(clipId); // Set the clicked clip as active
  };

  return (
    <div className="container mx-auto p-4">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        swipeable
        emulateTouch
        className="custom-carousel"
        onClickItem={() => {}} // Disable default carousel click
      >
        {topClipsData.map((clip, index) => (
          <div key={clip.id} className="flex justify-center items-center w-full">
            {activeClip === clip.id ? (
              <iframe
                src={`https://clips.twitch.tv/embed?clip=${clip.id}&parent=www.pixelcafe.moe&autoplay=true`}
                title={`Top Clip ${index + 1}`}
                allowFullScreen
                className="w-full"
                style={{ height: '500px' }}
              ></iframe>
            ) : (
              <div
                className="clip-thumbnail-wrapper"
                onClick={(e) => handleThumbnailClick(clip.id, e)}
              >
                {/* Display "Most Viewed" badge for the first clip */}
                {index === 0 && <div className="badge">Most Viewed</div>}
                <img
                  src={clip.thumbnail_url}
                  alt={`Clip ${index + 1}`}
                  className="w-full h-full"
                />
                <div className="clip-title">{clip.title}</div>
                <div className="play-button" style={{ backgroundColor: 'transparent' }}>
                  ▶
                </div>
              </div>
            )}
          </div>
        ))}
      </Carousel>
      {/* Load more button */}
      {topClipsData.length > 0 && (
        <button
          onClick={handlePageChange}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Load More Clips
        </button>
      )}
    </div>
  );
};

export default TopClipsCarousel;
