import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image'
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch, faYoutube, faTiktok, faXTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import BioSection from 'src/components/BioSection';
import StreamSchedule from 'src/components/StreamSchedule';
import TopClipsCarousel from '../components/TopClipsCarousel'; // Import the TopClipsCarousel component

import '../app/globals.css';
import '../app/output.css';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Head>
        <title>Welcome to PixelCafe!</title>
        <meta 
          name="description" 
          content="PixelCafe is a gaming and live streaming community. Join us for live streams, top clips, and more in the world of gaming." 
        />
        <meta 
          name="keywords" 
          content="Pixel, VTuber, gaming, MMORPGs, simulation games, virtual companion, interactive entertainment, humor, authenticity, community, lovebird, creativity, passion, virtual odyssey, virtual world, streaming, VR, VR Gaming, NES, online streaming, MMORPG adventures, simulation game strategy, story-rich environments, laughter, camaraderie, engaging streamers, charismatic streamers, unique blend, content creation, building a community, memories, endless discovery, virtual playground, online gaming, gaming adventures, gaming community, online community, digital world" 
        />
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1" 
        />
      </Head>
      <Navbar />
      <main className="container mx-auto pt-20 p-4 max-w-5xl">
        <section id="profile-picture" className="flex justify-center">
          <Image src="/profile.jpg" 
            alt="Profile Pic" 
            className="rounded-full h-56 w-56 object-cover" 
            width={500}
            height={300}  
          />
        </section>
        <section id="bio">
          <BioSection />
        </section>
        <section id="stream" className="bg-gray-900 text-white py-8 my-6 rounded-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Live Stream</h2>
            <div className="max-w-6xl mx-auto flex flex-wrap">
              {/* Twitch stream player */}
              <div className="w-full md:w-2/3 pr-4">
                <iframe
                  className="w-full h-96"
                  src="https://player.twitch.tv/?channel=pixelcafevt&parent=pixelcafe.moe"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Twitch chat */}
              <div className="w-full md:w-1/3">
                <iframe
                  className="w-full h-96"
                  src="https://www.twitch.tv/embed/pixelcafevt/chat?parent=pixelcafe.moe"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section id="schedule">
          <StreamSchedule />
        </section>
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
      <footer className="bg-gray-800 text-gray-300 py-4 sticky bottom-0">
        <div className="container mx-auto px-4 text-center flex justify-center space-x-4">
          <a href="http://www.twitch.tv/pixelcafevt" className="hover:text-purple-300">
            <FontAwesomeIcon icon={faTwitch} />
          </a>
          <a href="http://www.youtube.com/@pixelcafevt" className="hover:text-purple-300">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="http://www.x.com/pixelcafevt" className="hover:text-purple-300">
            <FontAwesomeIcon icon={faXTwitter} /> {/* Replace with appropriate icon */}
          </a>
          <a href="https://www.tiktok.com/@pixelcafevt" className="hover:text-purple-300">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://discord.gg/TbGuUFV2HT" className="hover:text-purple-300">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>
      </footer>
    </div>
  );
}
