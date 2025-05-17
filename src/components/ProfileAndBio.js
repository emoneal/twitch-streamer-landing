import Image from 'next/image';
import { motion } from 'framer-motion';
import BioSection from './BioSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch, faYoutube, faTiktok, faXTwitter, faDiscord, faInstagram, faBluesky, faSpotify } from '@fortawesome/free-brands-svg-icons';

const ProfileAndBio = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: 'spring', stiffness: 80, delay: 0.2 } 
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
        duration: 1.2,
        ease: "easeInOut",
      },
    },
    hover: { 
      scale: 1.5, 
      rotate: 15, 
      transition: { 
        duration: 0.3, 
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center md:flex-row md:items-start md:space-x-8 p-6"
      whileInView={{ opacity: 1 }}
    >
      <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 md:sticky md:top-20 z-1">
        <motion.div 
          whileHover="hover" 
          whileTap="tap" 
          variants={buttonVariants} 
          className="w-96 h-96 rounded-full overflow-hidden mb-6"
        >
          <a href="https://www.youtube.com/@pixelemii?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
    <Image
      src="/profile.png"
      alt="Profile Picture"
      width={600}
      height={600}
      className="object-cover h-full"
    />
    </a>
        </motion.div>

        {/* Social Links */}
        <div className="flex space-x-6 text-gray-400">
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

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ type: 'spring', stiffness: 80, delay: 0.4 }} 
        className="flex-grow"
      >
        <BioSection />
      </motion.div>
    </motion.div>
  );
};

export default ProfileAndBio;
