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
          const sortedClips = clips.sort((a, b) => b.view_count - a.view_count);
          setTopClipsData((prevData) => [...prevData, ...sortedClips]);
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
            <iframe
              src={`https://clips.twitch.tv/embed?clip=${clip.id}&parent=pixelcafe.moe`}
              title={`Top Clip ${index + 1}`}
              allowFullScreen
              className="w-full"
              style={{ height: '500px' }}
            ></iframe>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TopClipsCarousel;
