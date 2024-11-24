import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TopClipsCarousel = () => {
  const [topClipsData, setTopClipsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const clipsPerPage = 5;

  useEffect(() => {
    const fetchTopClips = async () => {
      try {
        const response = await fetch(`/api/top-clips?page=${currentPage}&perPage=${clipsPerPage}`);
        if (response.ok) {
          const clips = await response.json();
          setTopClipsData((prevData) => {
              const combinedData = [...prevData, ...clips];
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

  const [activeClip, setActiveClip] = useState(null);

  const handleThumbnailClick = (clipId, event) => {
    event.preventDefault(); // Prevent default action
    event.stopPropagation(); // Stop event from propagating to carousel
    setActiveClip(clipId);
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
        onClickItem={handlePageChange} // Triggered when the user clicks on a carousel item
      >
        {topClipsData.map((clip, index) => (
          <div key={index} className="flex justify-center items-center w-full">
            {activeClip === clip.id ? (
              <iframe
                src={`https://clips.twitch.tv/embed?clip=${clip.id}&parent=www.pixelcafe.moe&autoplay=true`}
                title={`Top Clip ${index + 1}`}
                allowFullScreen
                className="w-full"
                style={{ height: '500px' }}
              ></iframe>
            ) : (

<div key={index} className="flex justify-center items-center w-full">
  <div className="clip-thumbnail-wrapper" onClick={(e) => handleThumbnailClick(clip.id, e)}>
    <img
      src={clip.thumbnail_url}
      alt={`Clip ${index + 1}`}
      className="w-full h-full"
    />
    <div className="clip-title">{clip.title}</div>
    <div className="play-button" style={{ backgroundColor: 'transparent' }}>▶</div>
  </div>
</div>
            )}
          </div>
        ))}



      </Carousel>
    </div>
  );
};

export default TopClipsCarousel;
