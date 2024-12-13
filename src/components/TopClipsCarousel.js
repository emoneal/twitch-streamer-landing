import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TopClipsCarousel = () => {
  const [topClipsData, setTopClipsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [initialIndex, setInitialIndex] = useState(0); // Start with the highest-viewed clip

  const clipsPerPage = 5;

  useEffect(() => {
    const fetchTopClips = async () => {
      try {
        const response = await fetch(`/api/top-clips?page=${currentPage}&perPage=${clipsPerPage}`);
        if (response.ok) {
          const clips = await response.json();

          // Sort clips by view count (descending order)
          const sortedClips = [...clips].sort((a, b) => b.view_count - a.view_count);

          // Set sorted data and ensure initialIndex matches the first (most viewed) clip
          setTopClipsData((prevData) => [...prevData, ...sortedClips]);
          if (currentPage === 1) setInitialIndex(0); // On first page, start with index 0
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

  const handleThumbnailClick = (index, event) => {
    event.preventDefault();
    event.stopPropagation();
    setInitialIndex(index); // Sync carousel index with thumbnail
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
        selectedItem={initialIndex} // Sync carousel to the correct index
        onChange={(index) => setInitialIndex(index)} // Keep track of the active index
      >
        {topClipsData.map((clip, index) => (
          <div key={clip.id} className="flex justify-center items-center w-full">
            <iframe
              src={`https://clips.twitch.tv/embed?clip=${clip.id}&parent=www.pixelcafe.moe&autoplay=true`}
              title={`Top Clip ${index + 1}`}
              allowFullScreen
              className="w-full"
              style={{ height: '500px' }}
            ></iframe>
          </div>
        ))}
      </Carousel>
      {/* Thumbnail Section */}
      <div className="flex justify-center mt-4 space-x-4">
        {topClipsData.map((clip, index) => (
          <div
            key={clip.id}
            onClick={(e) => handleThumbnailClick(index, e)}
            className={`thumbnail-wrapper ${initialIndex === index ? 'active' : ''}`}
          >
            {/* Highlight active thumbnail */}
            <img
              src={clip.thumbnail_url}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full cursor-pointer"
            />
            <div className="clip-title">{clip.title}</div>
          </div>
        ))}
      </div>
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
