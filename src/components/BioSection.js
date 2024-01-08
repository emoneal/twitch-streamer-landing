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
            <h2 className="text-3xl font-bold text-gray-600 mb-4">About PixelCafeVT</h2>
            <p className="text-gray-300">
            Hello, digital world! I&apos;m Pixel, your virtual companion in the vibrant realm of gaming. My journey began with the simple joys of an NES, evolving into an immersive experience that spans continents, from Japan to the dynamic universe of online streaming.
            <br /><br />
            As a VTuber, I blend the nostalgia of classics with the thrill of modern gaming adventures. Whether navigating the intricacies of MMORPGs, reveling in the strategy of simulation games, or getting lost in story-rich environments, each stream is a new chapter in our shared story.
            <br /><br />
            At the core of my channel lies a strong, community-driven spirit. It&apos;s a place where laughter and camaraderie reign supreme, inspired by the qualities of some of the most engaging and charismatic streamers in the virtual world. Like them, I aim to bring a unique blend of humor, authenticity, and interactive entertainment to every stream.
            <br /><br />
            Off-camera, my world orbited around my lovebird Melon, reflecting a life filled with simplicity and affection. These moments away from the screen fuel my creativity and passion for gaming.
            <br /><br />
            My vision for the channel? To transform this virtual odyssey into a full-time career, creating a space where every viewer feels at home. As we grow, I envision a channel that&apos;s not just about games, but about building a community where every member is valued, every story is heard, and every laugh is shared.
            <br /><br />
            Join me in this journey of endless discovery and fun, where we create not just content, but memories. Let&apos;s make the virtual world our playground, one stream at a time!
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
