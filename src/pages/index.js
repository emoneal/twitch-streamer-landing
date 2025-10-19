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
 (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>PixelEmii 👾🐇 | The Hacker Bunny VTuber</title>
      <meta
        name="description"
        content="PixelEmii is the glitch bunny VTuber behind the Byte & Brew Café—variety streams with surreal humor, cozy chaos, and caffeinated vibes. Live Wed/Sat/Sun @ 5pm ET."
      />
      <meta
        name="keywords"
        content="PixelEmii, VTuber, ENVTuber, VTuberEN, chaotic VTuber, unhinged VTuber, meme VTuber, funny VTuber, gaming VTuber, YouTube VTuber, Twitch VTuber, bunny VTuber, bunny girl, trans VTuber, LGBT VTuber, cursed gaming, unhinged streamer, silly VTuber, unfiltered VTuber, glitch bunny, cyberpunk VTuber, Byte & Brew Café, Pixel Café, Pixel Bunny, chaotic gamer, streamer, content creator"
      />
      <link rel="canonical" href="https://www.pixelemii.com/" />
      <meta name="theme-color" content="#E79FC3" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* --- Open Graph --- */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="PixelEmii" />
      <meta property="og:title" content="PixelEmii | The Hacker Bunny VTuber" />
      <meta
        property="og:description"
        content="Join PixelEmii for variety streams: surreal, funny, and a little cursed. Live Wed/Sat/Sun @ 5pm ET."
      />
      <meta property="og:url" content="https://www.pixelemii.com/" />
      <meta
        property="og:image"
        content="https://www.pixelemii.com/ogpixelcafe.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* --- Twitter --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="PixelEmii | The Hacker Bunny VTuber" />
      <meta
        name="twitter:description"
        content="Caffeinated chaos, surreal games, and cozy vibes. Live Wed/Sat/Sun @ 5pm ET."
      />
      <meta
        name="twitter:image"
        content="https://www.pixelemii.com/ogpixelcafe.png"
      />
      <meta name="twitter:creator" content="@pixel_emii" />

      {/* --- Structured Data --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "PixelEmii",
            alternateName: "Pixel Emii",
            url: "https://www.pixelemii.com/",
            image: "https://www.pixelemii.com/ogpixelcafe.png",
            jobTitle: "VTuber & Streamer",
            description:
              "Glitch bunny VTuber streaming variety games with surreal humor and cozy chaos at the Byte & Brew Café.",
            sameAs: [
              "https://twitch.tv/pixelemii",
              "https://youtube.com/@pixelemii",
              "https://twitter.com/pixel_emii",
              "https://www.instagram.com/pixelemii",
              "https://bsky.app/profile/pixelemii.bsky.social",
              "https://discord.gg/yourinvite",
            ],
          }),
        }}
      />
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
