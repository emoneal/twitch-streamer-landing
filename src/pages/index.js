import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ParticlesBackground from 'src/components/ParticlesBackground';
import HeroSection from 'src/components/HeroSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch, faYoutube, faTiktok, faXTwitter, faDiscord, faInstagram, faBluesky, faSpotify } from '@fortawesome/free-brands-svg-icons';
import FullScreenImage from 'src/components/FullScreenImage'
import ProfileAndBio from 'src/components/ProfileAndBio';
import ProfileCard from 'src/components/ProfileCard';
import StreamSchedule from 'src/components/StreamSchedule';
import TopClipsCarousel from '../components/TopClipsCarousel'; // Import the TopClipsCarousel component
import YouTubeSection from '../components/YouTubeSection'
import Script from 'next/script';


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
      <meta charset="UTF-8" 
      />
        <title>PixelEmii - The Hacker Bunny VTuber</title>
        <meta 
          name="keywords" 
          content="PixelEmii, Pixel, Emii, Byte & Brew Cafe, Cafe VTuber, PixelCafe, PixelCafeVT, ENVTuber, VTuberEN, English VTuber, Twitch VTuber, YouTube VTuber, trans VTuber, bunny VTuber, bunnygirl, rabbit girl, cozy streamer, gaming streamer, MMORPG VTuber, simulation games, Final Fantasy XIV VTuber, Sims VTuber, Fortnite streamer, variety streamer, nostalgic gamer, interactive entertainment, humor, chill vibes, inclusive community, LGBTQ+ friendly streamer, trans representation, digital adventures, VR gaming, engaging streamer, charismatic personality, creativity and passion, virtual cafe experience, retro gaming, NES games, story-rich games, adventure games, red teamer streamer, cybersecurity gamer, ethical hacker gamer, TryHackMe VTuber, gamer girl vibes, indie game enthusiast, streamer community building, parasocial interaction, cozy digital spaces, online friendships, wholesome content, Pixel Café vibes, bunny girl aesthetic, pastel gaming world, casual gaming fun, strategic simulation games, escapism, comfy gaming sessions, Twitch streamer, YouTuber, cyberpunk, cyberpunk vtuber, hacker vtuber, cybersecurity vtuber, tutorials"
        />
        <meta name="description" content="PixelEmii is a cyberpunk-themed VTuber with a mischievous, playful personality and a love for gaming. Join the chaos at the Byte & Brew Cafe!" />
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1" 
        />
        <meta property="og:image" content="/ogpixelcafe.png"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="robots" content="index, follow" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3KGBJQ48CZ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3KGBJQ48CZ');
        `}
      </Script>
      <ParticlesBackground />
      <Navbar />
      <main>
        <section id="bio">
        <HeroSection />
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
                    src="https://player.twitch.tv/?channel=pixelemii&parent=www.pixelemii.com"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                {/* Twitch chat */}
                <div className="w-full md:w-1/3">
                  <iframe
                    className="w-full h-96"
                    src="https://www.twitch.tv/embed/pixelemii/chat?parent=www.pixelemii.com"
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
            <h2 className="text-3xl font-bold mb-4 text-gray-200 text-center">Top Clips</h2>
            <div className="max-w-6xl mx-auto">
              {/* Render the TopClipsCarousel component */}
              <TopClipsCarousel />
            </div>
          </div>
        </section>
      </main>
      <footer className="sticky bottom-0 bg-gray-800 text-gray-300 py-4 z-5">
        <div className="container mx-auto px-4 text-center flex justify-center space-x-4">
          <a href="https://www.twitch.tv/pixelemii" className="hover:text-purple-300" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitch} />
          </a>
          <a href="https://www.youtube.com/@pixelemii?sub_confirmation=1" className="hover:text-purple-300" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://open.spotify.com/artist/4IVqzOLabkkT6ljyg1z5x6" className="hover:text-purple-300" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSpotify} />
          </a>
          <a href="https://discord.gg/TbGuUFV2HT" className="hover:text-purple-300" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://www.instagram.com/pixelemii" className="hover:text-purple-300" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.tiktok.com/@pixelemii" className="hover:text-purple-300" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://www.x.com/pixelemii" className="hover:text-purple-300" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://bsky.app/profile/pixelemii.bsky.social" className="hover:text-purple-300" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faBluesky} />
          </a>
        </div>
      </footer>
    </div>
  );
}
