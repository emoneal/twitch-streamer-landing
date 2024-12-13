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

          // Sort clips by view count (descending order)
          const sortedClips = [...clips].sort((a, b) => b.view_count - a.view_count);

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
      {/* Carousel */}
      <Carousel
        showArrows={true}
        showThumbs={false}
        dynamicHeight={true}
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
        onClickThumb={(index) => console.log(`Thumbnail clicked: ${index}`)}
      >
        {topClipsData.map((clip, index) => (
          <div key={clip.id}>
            {/* Embed Video */}
            <iframe
              src={`https://player.twitch.tv/?video=${clip.id}&parent=localhost`}
              height="360"
              width="640"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
            ></iframe>
            {/* Display Thumbnail Below */}
            <img
              src={clip.thumbnail_url}
              alt={`Thumbnail for ${clip.title}`}
              className="w-full mt-2"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TopClipsCarousel;
