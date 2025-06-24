import React from "react";
import { motion } from 'framer-motion';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch, faYoutube, faTiktok, faXTwitter, faDiscord, faInstagram, faBluesky, faSpotify } from '@fortawesome/free-brands-svg-icons';

const ProfileCard = () => {
  const data = {
    nickname: "PixelEmii",
    birthday: "June 24, ????",
    birthPlace: "Glitched into existence (Unknown coordinates)",
    bloodType: "404 Not Found",
    hobbies:
      "Gaming, making chaotic memes, hacking reality, being cute and unhinged",
    music: "Cute-core, J-pop, glitch hop, and chaotic lo-fi",
    motto: "I'm already in your backend. ≽^•⩊•^≼",
    fanart: "PixelSketches",
    nsfwFanart: "NSFWEmii",
    fandomName: "The Backenders"
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: 'spring', stiffness: 70, delay: 0.1 } 
    },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const iconVariants = {
    dance: { 
      scale: [1, 1.1, 1], 
      rotate: [0, 10, -10, 0], 
      transition: { 
        repeat: Infinity,
        duration: 1,
      },
    },
    hover: { 
      scale: 1.5, 
      rotate: 10, 
      transition: { 
        duration: 0.1, 
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="md:items-start"
      whileInView={{ opacity: 1 }}
    >
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white py-24 overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-gray-900 opacity-90" />

      <div className="relative max-w-4xl w-full space-y-10">
        <div className="flex flex-col items-center py-10 space-y-4">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500">
            <Image
              src="/profile.png"
              alt="PixelEmii Profile"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold py-6 text-purple-300 glitch-text">
            PixelEmii 🔌🐰⚡
          </h1>
          <p className="text-lg md:text-2xl p-8 text-purple-200">
            Hacker bunny VTuber unleashing chaos, memes, and meltdown energy.
          </p>

          <div className="flex flex-wrap justify-center py-2 gap-4">
            <a href="https://www.twitch.tv/pixelemii" target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition">🔴 Watch Live</a>
            <a href="https://www.youtube.com/@pixelemii?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition">📺 Subscribe</a>
            <a href="https://discord.gg/TbGuUFV2HT" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition">👾 Join the Server</a>
            <a href="https://open.spotify.com/artist/4IVqzOLabkkT6ljyg1z5x6" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition">🎵 Listen on Spotify</a>
          </div>

          <div className="flex justify-center space-x-4 text-purple-300 py-14 mt-4">
            {[ 
            { href: "https://www.twitch.tv/pixelemii", icon: faTwitch },
            { href: "https://www.youtube.com/@pixelemii?sub_confirmation=1", icon: faYoutube },
            { href: "https://open.spotify.com/artist/4IVqzOLabkkT6ljyg1z5x6", icon: faSpotify },
            { href: "https://discord.gg/TbGuUFV2HT", icon: faDiscord },
            { href: "https://www.instagram.com/pixelemii", icon: faInstagram },
            { href: "https://www.tiktok.com/@pixelemii", icon: faTiktok },
            { href: "https://www.x.com/pixelemii", icon: faXTwitter },
            { href: "https://bsky.app/profile/pixelemii.bsky.social", icon: faBluesky }
          ].map(({ href, icon }, index) => (
            <motion.a 
              key={index} 
              href={href} 
              variants={iconVariants}
              animate="dance"
              whileHover="hover"
              className="hover:text-purple-300 transition duration-200"
            >
              <FontAwesomeIcon icon={icon} size="2x" />
            </motion.a>
          ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-purple-300 glitch-text">
          ACCESS LOG: PIXELEMII
        </h2>
        <p className="text-xs text-center text-purple-400 font-mono">
          [ORIGIN TRACE] Subject entered digital realm via energy drink-induced
          keyboard short circuit. Suspected anomaly. Entity ID: Bunny.exe
        </p>

        <div className="grid grid-cols-2 gap-3 text-sm font-mono max-w-3xl mx-auto">
          <div className="bg-black text-purple-300 font-semibold py-1 px-2">
            Nickname
          </div>
          <div className="bg-purple-900 py-1 px-2">{data.nickname}</div>

          <div className="bg-black text-purple-300 font-semibold py-1 px-2">
            Birthday
          </div>
          <div className="bg-purple-900 py-1 px-2">{data.birthday}</div>

          <div className="bg-black text-purple-300 font-semibold py-1 px-2">
            Birth Place
          </div>
          <div className="bg-purple-900 py-1 px-2">{data.birthPlace}</div>

          <div className="bg-black text-purple-300 font-semibold py-1 px-2">
            Blood Type
          </div>
          <div className="bg-purple-900 py-1 px-2">{data.bloodType}</div>

          <div className="bg-black text-purple-300 font-semibold py-1 px-2">
            Hobbies
          </div>
          <div className="bg-purple-900 py-1 px-2">{data.hobbies}</div>

          <div className="bg-black text-purple-300 font-semibold py-1 px-2">
            Music
          </div>
          <div className="bg-purple-900 py-1 px-2">{data.music}</div>

          <div className="bg-black text-purple-300 font-semibold py-1 px-2">
            Motto
          </div>
          <div className="bg-purple-900 py-1 px-2">{data.motto}</div>

          <div className="bg-black text-purple-300 font-semibold py-1 px-2">
            Fanart
          </div>
          <div className="bg-purple-900 py-1 px-2">#{data.fanart}</div>

          <div className="bg-black text-purple-300 font-semibold py-1 px-2">
            NSFW Fanart
          </div>
          <div className="bg-purple-900 py-1 px-2">#{data.nsfwFanart}</div>

          <div className="bg-black text-purple-300 font-semibold py-1 px-2">
            Fandom Name
          </div>
          <div className="bg-purple-900 py-1 px-2">{data.fandomName}</div>
        </div>
      </div>

      <style jsx>{`
        .glitch-text {
          position: relative;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
          color: #f0f;
          z-index: -1;
        }
        .glitch-text::before {
          top: -2px;
          animation: glitchTop 1s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          bottom: -2px;
          animation: glitchBottom 1s infinite linear alternate-reverse;
        }
        @keyframes glitchTop {
          0% {
            clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
          }
          100% {
            clip-path: polygon(0 0%, 100% 0%, 100% 8%, 0 8%);
          }
        }
        @keyframes glitchBottom {
          0% {
            clip-path: polygon(0 95%, 100% 95%, 100% 98%, 0 98%);
          }
          100% {
            clip-path: polygon(0 92%, 100% 92%, 100% 100%, 0 100%);
          }
        }
      `}</style>
    </section>
    </motion.div>
  );
};

export default ProfileCard;