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
            <h2 className="text-3xl font-bold text-gray-200 mb-4">About PixelEmii</h2>
            <p class="text-gray-200 text-lg">
                Hold onto your headsets, adventurers! I&apos;m PixelEmii, the bunny girl VTuber who&apos;s here to blast your boredom with chaotic gameplay and enough energy to power a rocket! 🚀
            </p>
            <br />
            <p class="text-gray-300">
                Once a corporate drone stuck in a soul-crushing 9-5, I got zapped into the digital world thanks to a gamer juice mishap. (Don&apos;t ask. No really, don&apos;t &ndash; it involves three energy drinks, some sake, and a cursed gaming keyboard.)
            </p>
            <br />
            <p class="text-gray-300">
                Now I&apos;m living my best digital life at PyonPyon Cafe ☕, where every customer gets a free shot of cream and my signature Bunny Blast Energy Latte (now with questionable amounts of caffeine)! Just don&apos;t ask what&apos;s in it... this bunny&apos;s got secrets!
            </p>
            <br />
            <p class="text-gray-300">
                I&apos;m your chaotic variety streamer who&apos;ll play anything that catches these floppy ears! You&apos;ll usually find me causing mayhem in MMOs or breaking every possible physics law in simulator games. Nothing brings me more joy than watching a truck simulator go completely wrong while chatting with my wonderful community!
            </p>
            <br />
            <p class="text-gray-300">
                After 12 years in Japan, this bunny&apos;s got a taste for the finer things in life &ndash; premium sake, authentic sushi, and retro gaming collections that would make any collector&apos;s heart skip a beat. Fun fact: I may or may not have an entire room dedicated to old Famicom games!
            </p>
            <br />
            <p class="text-gray-300">
                Fair warning: I try to keep things wholesome, but this bunny&apos;s got a mischievous streak! My energy levels run on a scale from &quot;bouncing off the walls&quot; to &quot;surprise naptime stream,&quot; and yes, there will be random Japanese gaming trivia and sake reviews nobody asked for.
            </p>
            <br />
            <p class="text-gray-300">
                At PyonPyon Cafe, every visitor gets their own omikuji (Japanese fortune) &ndash; though I can&apos;t guarantee they&apos;re all good fortunes. Last week someone got &quot;You will trip over a digital carrot&quot;... and somehow it came true!
            </p>
            <br />
            <p class="text-gray-300">
                So hop into my digital burrow and let&apos;s make some memories together! Whether we&apos;re raiding dungeons, breaking simulators, or just vibing at the cafe, there&apos;s always room for more friends in this bunny&apos;s warren.
            </p>
            <div class="mt-8 bg-gray-800 rounded-lg p-4 text-center text-gray-300">
                Join me for the chaos on Tues, Thurs &amp; Fri from 2pm to 6pm EST! 🐰🎮🍶☕
            </div>

          </div>
        </section>
      </div>
    </motion.div>
  );
}
