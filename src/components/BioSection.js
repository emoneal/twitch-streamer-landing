import { motion } from 'framer-motion';

const bioVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      type: 'spring', 
      stiffness: 100 
    } 
  },
};

export default function BioSection() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={bioVariants}
      className="bio-section"
    >
      <div className="container mx-auto p-4">
        <section id="bio" className="py-8 bg-gray-900 my-4 rounded-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-300 mb-4">About PixelEmii</h2>
            <p className="text-gray-300">Hold onto your headsets, adventurers! I&apos;m PixelEmii, the bunny girl VTuber who&apos;s here to blast your boredom with chaotic gameplay and enough energy to power a rocket! 🚀</p> 
            <br />
            <p className="text-gray-300">Once a corporate drone stuck in a soul-crushing 9-to-5, I got zapped into the digital world thanks to a gamer juice mishap. (Don&apos;t ask.)</p> 
            <br />
            <p className="text-gray-300">Now, I&apos;m embracing the chaos, streaming games, making friends, AND running my very own digital cafe! ☕ That&apos;s right, this bunny barista is serving up smiles and good vibes alongside your favorite games.</p> 
            <br />
            <p className="text-gray-300">But here&apos;s the kicker: I&apos;m on a mission to make YOU smile. Yep, that&apos;s right! If I can brighten your day, even for a little bit, then my mission is accomplished.</p> 
            <br />
            <p className="text-gray-300">My streams are all about comfy vibes, unpredictable moments, a whole lotta laughter, and maybe a virtual latte or two.</p> 
            <br />
            <p className="text-gray-300">Oh, and did I mention I spent 12 years in Japan? This bunny&apos;s got stories for days!</p> 
            <br />
            <p className="text-gray-300">So, hop into my digital burrow (and grab a seat at my cafe!) and let&apos;s embark on an adventure filled with friendship, fun, and maybe even a few accidental explosions. Let&apos;s make some memories together!</p> 
            <br />
            <p className="text-gray-300">Don&apos;t forget to follow and join the Discord server for updates and shenanigans! 🐰🎮🌸🎉☕</p> 
            <br />
            <p className="text-gray-300">Join me on this adventure! Live Tues, Thurs &amp; Fri at 2pm EST.</p>

          </div>
        </section>
      </div>
    </motion.div>
  );
}
