// pages/index.js (or pages/test.js)
'use client';
import Head from 'next/head'
import Script from 'next/script';
import Image from 'next/image';
import '../app/globals.css';
import '../app/output.css';
import YouTubeLatest from '../components/YouTubeLatest'; // adjust path
import ParticlesBackground from '@/components/ParticlesBackground';
import {
  FaTwitch,
  FaYoutube,
  FaDiscord,
  FaSpotify,
  FaInstagram,
  FaTiktok,
  FaXTwitter, // requires react-icons >= v4.10; otherwise use FaTwitter from 'react-icons/fa'
} from 'react-icons/fa6';
import { SiBluesky } from 'react-icons/si';


import NextStreamCountdown from '../components/NextStreamCountdown';




export default function Home() {
  return (
    <div>
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
    <main className="relative min-h-screen text-white">
      <ParticlesBackground />
      <div className="relative z-10">
        {/* NAV */}
        <header className="sticky top-0 z-[999] isolate border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-black/40">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-2xl overflow-hidden">
                    <Image
                        src="/profile.png"
                        alt="PixelEmii logo"
                        width={36}
                        height={36}
                        className="object-contain"
                        priority
                    />
                    </div>
                <span className="font-bold tracking-tight">PixelEmii</span>
            </div>
            <nav className="hidden md:flex gap-6 text-sm text-white/80">
                <a href="#watch" className="hover:text-white">Watch</a>
                <a href="#videos" className="hover:text-white">Videos</a>
                <a href="#music" className="hover:text-white">Music</a>
                <a href="#about" className="hover:text-white">About</a>
                
            </nav>
            <a
              href="https://www.twitch.tv/pixelemii"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-fuchsia-500 px-4 py-2 text-sm font-semibold shadow-lg shadow-fuchsia-500/30"
            >
              Watch on Twitch
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
            {/* LEFT: Text + CTAs + Socials */}
            <div className="relative z-50">
            <div className="flex items-center gap-3 text-sm text-white/70">
                <span className="inline-flex rounded-full bg-fuchsia-400/10 px-3 py-1 border border-fuchsia-300/20">Glitch Bunny.exe</span>
                <span className="inline-flex rounded-full bg-white/5 px-3 py-1 border border-white/10">Byte & Brew Café</span>
            </div>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
                Cute, comfy <span className="text-fuchsia-300">hacker</span> VTuber
            </h1>

            <p className="mt-4 text-white/80 text-base md:text-lg max-w-prose">
                Bunny + light glitch energy = chaos. 
                <br />
                Pull up a chair and break the simulation softly.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center justify-start gap-x-3 gap-y-3 text-sm md:text-base">
              <a
                href="https://www.twitch.tv/pixelemii"
                target="_blank"
                rel="noreferrer"
                aria-label="Open PixelEmii on Twitch"
                className="inline-flex items-center gap-2 rounded-2xl bg-fuchsia-500 px-5 py-3 font-semibold shadow-md shadow-fuchsia-500/40 drop-shadow-[0_0_6px_rgba(255,255,255,0.25)] hover:scale-105 transition"
              >
                <FaTwitch className="text-lg" />
                Twitch
              </a>

              <a
                href="https://www.youtube.com/@PixelEmii"
                target="_blank"
                rel="noreferrer"
                aria-label="Open PixelEmii on YouTube"
                className="inline-flex items-center gap-2 rounded-2xl bg-red-500 px-5 py-3 font-semibold shadow-md shadow-red-500/40 drop-shadow-[0_0_6px_rgba(255,255,255,0.25)] hover:scale-105 transition"
              >
                <FaYoutube className="text-lg" />
                YouTube
              </a>

              <a
                href="https://discord.gg/TbGuUFV2HT"
                target="_blank"
                rel="noreferrer"
                aria-label="Join PixelEmii Discord"
                className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500 px-5 py-3 font-semibold shadow-md shadow-indigo-500/40 drop-shadow-[0_0_6px_rgba(255,255,255,0.25)] hover:scale-105 transition"
              >
                <FaDiscord className="text-lg" />
                Discord
              </a>

              <a
                href="https://open.spotify.com/artist/4IVqzOLabkkT6ljyg1z5x6"
                target="_blank"
                rel="noreferrer"
                aria-label="Open PixelEmii on Spotify"
                className="inline-flex items-center gap-2 rounded-2xl bg-green-600/40 px-5 py-3 font-semibold border border-green-500/40 shadow-md shadow-green-500/30 drop-shadow-[0_0_6px_rgba(255,255,255,0.25)] hover:scale-105 hover:bg-green-500/50 hover:text-white transition"
              >
                <FaSpotify className="text-lg" />
                Spotify
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="mt-8 flex flex-wrap justify-start gap-5 text-2xl text-white/80">
              {[
                { href: "https://twitter.com/pixelemii", icon: <FaXTwitter /> },
                { href: "https://bsky.app/profile/pixelemii.bsky.social", icon: <SiBluesky /> },
                { href: "https://www.instagram.com/pixelemii", icon: <FaInstagram /> },
                { href: "https://www.tiktok.com/@pixelemii", icon: <FaTiktok /> }
              ].map(({ href, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition duration-200 hover:text-fuchsia-300 hover:scale-125 drop-shadow-[0_0_6px_rgba(245,194,231,0.6)]"
                >
                  {icon}
                </a>
              ))}
            </div>
            </div>

            {/* RIGHT: Image */}
            <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden">
              <Image
                src="/hero.webp"
                alt="PixelEmii comfy hacker bunny"
                width={2560}
                height={1440}
                className="h-full w-full object-cover"
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
            </div>
        </div>
        </section>


        {/* WATCH / SCHEDULE */}
        <section id="watch" className="border-t border-white/10 bg-white/5">
          <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
              <h3 className="font-semibold mb-2">Stream Schedule</h3>
              <ul className="space-y-1 text-white/80 text-sm">
                <li>Tue • 7:00 PM EST — Variety / VTuber chaos</li>
                <li>Fri • 7:00 PM EST — Story games / weirdcore</li>
                <li>Sat • 7:00 PM EST — Community & comfy</li>
              </ul>

              <p className="text-xs text-white/50 mt-3">*Times may glitch. Best alerts on Discord.</p>
              <br />
              <NextStreamCountdown />
            </div>

            <div className="rounded-2xl bg-black/40 border border-white/10 md:col-span-2 overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://player.twitch.tv/?channel=pixelemii&parent=www.pixelemii.com&muted=true"
                  allow="autoplay; fullscreen"
                  title="Twitch Player"
                />
              </div>
            </div>
          </div>
        </section>

        {/* LATEST VIDEOS */}
        <YouTubeLatest />

        <section id="music" className="border-y border-white/10 bg-gradient-to-r from-fuchsia-900/20 via-black/30 to-fuchsia-900/20">
            <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-8 items-center">
                <div>
                <h2 className="text-2xl md:text-3xl font-bold">New single: &quot;Comfort Loop&quot;</h2>
                <p className="text-white/80 mt-2">Cute-core meets lo-fi rain vibes. Stream it everywhere.</p>
                <div className="mt-4 flex gap-3">
                    <a href="https://youtube.com/shorts/_gbR0R-sIgA" target="_blank" rel="noreferrer"
                    className="rounded-2xl bg-fuchsia-500 px-5 py-3 font-semibold shadow-lg shadow-fuchsia-500/30">
                    Listen now
                    </a>
                    <a href="https://pixelemii.ffm.to/2amrain" target="_blank" rel="noreferrer"
                    className="rounded-2xl bg-white/10 px-5 py-3 font-semibold border border-white/10">
                    Pre-save: 2 AM Rain
                    </a>
                </div>
                </div>
                <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
                <Image
                    src="/cover-art.webp"
                    alt="Comfort Loop cover art"
                    width={1080}
                    height={1080}
                    className="h-full w-full object-cover"
                />
                </div>
            </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                <h2 className="text-2xl md:text-3xl font-bold">Lore.exe</h2>
                <p className="text-white/80 mt-2">
                    Spilled an energy drink on my keyboard and got isekai’d into the net.
                    Now I run a suspiciously cozy cyber café that’s totally not a front for hacking…
                    I stream weird games, make cute bangers, and bully my chat with love.
                    100 % bunny energy all the time.
                </p>
                </div>
                <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
                <h3 className="font-semibold mb-2">Stats & Fandom</h3>
                <ul className="text-white/80 text-sm space-y-1">
                    <li>Community : The Backenders</li>
                    <li>Art Tag : #PixelSketches</li>
                    <li>NSFW Tag : #NSFWEmii</li>
                    <li>Motto : &quot;I’m already in your backend.&quot;</li>
                </ul>
                </div>
            </div>
        </section>



        {/* FOOTER */}
        <footer className="border-t border-white/10 py-10 text-center text-white/60 text-sm">
          <div className="mx-auto max-w-6xl px-4">
            <p>© {new Date().getFullYear()} PixelEmii • Bunny.exe</p>
          </div>
        </footer>
      </div>
    </main>
    </div>
  );
}
