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
      <div className="container mx-auto p-4">
        <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            showIndicators={false} // Set to false to hide bottom dots
            infiniteLoop={true}
            centerMode={false}
            className="custom-carousel"
            swipeable
            emulateTouch
        >
            {topClipsData.map((clip, index) => (
                <div key={index} className="flex justify-center items-center w-full">
                    <iframe
                        src={`https://clips.twitch.tv/embed?clip=${clip.id}&parent=pixelcafe.moe`}
                        title={`Top Clip ${index + 1}`}
                        allowFullScreen
                        className="w-full"
                        style={{ height: '500px' }} // Adjust height as needed
                    ></iframe>
                </div>
            ))}
        </Carousel>
      </div>
    );
};

export default TopClipsCarousel;
