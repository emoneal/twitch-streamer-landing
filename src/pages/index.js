import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch, faYoutube, faTiktok, faXTwitter, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import FullScreenImage from 'src/components/FullScreenImage'
import ProfileAndBio from 'src/components/ProfileAndBio';
import StreamSchedule from 'src/components/StreamSchedule';
import TopClipsCarousel from '../components/TopClipsCarousel'; // Import the TopClipsCarousel component
import YouTubeSection from '../components/YouTubeSection'

import '../app/globals.css';
import '../app/output.css';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the window size when the component mounts
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Add an event listener for window size changes
    window.addEventListener('resize', checkWindowSize);

    // Initial check when the component mounts
    checkWindowSize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>PixelEmii - Welcome to my site!</title>
        <meta 
          name="description" 
          content="PixelEmii is a that creates gaming content. Join us for live streams, top clips, and more in the world of gaming." 
        />
        <meta 
          name="keywords" 
          content="Pixel, PixelCafe, PixelEmii, Emii, ENVTuber, VTuber, VTuberEN, gaming, MMORPGs, simulation games, virtual companion, interactive entertainment, humor, authenticity, community, creativity, passion, virtual odyssey, virtual world, streaming, VR, VR Gaming, NES, online streaming, MMORPG adventures, simulation game strategy, story-rich environments, laughter, camaraderie, engaging streamers, charismatic streamers, unique blend, content creation, building a community, memories, endless discovery, virtual playground, online gaming, gaming adventures, gaming community, online community, digital world" 
        />
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1" 
        />
        <meta property="og:image" content="/ogpixelcafe.png"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Navbar />
      <FullScreenImage />
      <main className="container mx-auto pt-20 p-4">
        <section id="bio" className="flex justify-center items-center">
          <ProfileAndBio />
        </section>
        <section id="schedule" className="py-8">
          <StreamSchedule />
        </section>
        {!isMobile && (
          <section id="stream" className="bg-gray-900 text-white py-8 my-6 rounded-lg">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-4 text-center">Live Stream</h2>
              <div className="max-w-6xl mx-auto flex flex-wrap">
                {/* Twitch stream player */}
                <div className="w-full md:w-2/3 pr-4">
                  {/* Render the live stream player */}
                  <iframe
                    className="w-full h-96"
                    src="https://player.twitch.tv/?channel=pixelemii&parent=www.pixelcafe.moe"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                {/* Twitch chat */}
                <div className="w-full md:w-1/3">
                  <iframe
                    className="w-full h-96"
                    src="https://www.twitch.tv/embed/pixelemii/chat?parent=www.pixelcafe.moe"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        )}
        <YouTubeSection />

        {/* Use the TopClipsCarousel component here */}
        <section id="top-clips" className="bg-gray-900 text-white py-8 my-6 rounded-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Top Clips</h2>
            <div className="max-w-6xl mx-auto">
              {/* Render the TopClipsCarousel component */}
              <TopClipsCarousel />
            </div>
          </div>
        </section>
      </main>
      <footer className="sticky bottom-0 bg-gray-800 text-gray-300 py-4">
        <div className="container mx-auto px-4 text-center flex justify-center space-x-4">
          <a href="https://www.twitch.tv/pixelemii" className="hover:text-purple-300">
            <FontAwesomeIcon icon={faTwitch} />
          </a>
          <a href="https://www.youtube.com/@pixelemii" className="hover:text-purple-300">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://www.x.com/pixelemii" className="hover:text-purple-300">
            <FontAwesomeIcon icon={faXTwitter} /> {/* Replace with appropriate icon */}
          </a>
          <a href="https://www.tiktok.com/@pixelemii" className="hover:text-purple-300">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://www.instagram.com/pixelemii" className="hover:text-purple-300">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://discord.gg/TbGuUFV2HT" className="hover:text-purple-300">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>
      </footer>
    </div>
  );
}
