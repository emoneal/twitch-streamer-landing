import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

const TopClipsCarousel = () => {
  const [topClipsData, setTopClipsData] = useState([]);

  useEffect(() => {
    const fetchTopClips = async () => {
      try {
        const response = await fetch('/api/top-clips');
        if (response.ok) {
          const clips = await response.json();
          setTopClipsData(clips);
        } else {
          throw new Error('Failed to fetch top clips');
        }
      } catch (error) {
        console.error('Error fetching top clips:', error);
      }
    };

    fetchTopClips();
  }, []);

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      centerMode={true}
      infiniteLoop={true}
      centerSlidePercentage={33.33}
      className="custom-carousel"
    >
      {topClipsData.map((clip, index) => (
        <div key={index} className="carousel-item flex flex-col items-center justify-center">
          <iframe
            src={`https://clips.twitch.tv/embed?clip=${clip.slug}&parent=flexie.moe`}
            title={`Top Clip ${index + 1}`}
            allowFullScreen
          ></iframe>
          <p className="pb-10 text-center mt-2 text-center">{clip.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default TopClipsCarousel;
