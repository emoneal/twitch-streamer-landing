import React from "react";

const ProfileCard = () => {
  const data = {
    nickname: "PixelEmii",
    birthday: "June 24, ????",
    birthPlace: "Glitched into existence (Unknown coordinates)",
    bloodType: "404 Not Found",
    hobbies: "Gaming, making chaotic memes, hacking reality, being cute and unhinged",
    music: "Cute-core, J-pop, glitch hop, and chaotic lo-fi",
    motto: "I’m already in your backend. ≽^•⩊•^≼",
    fanart: "pixelsketches",
    nsfwFanart: "nsfwemii",
    fandomName: "The Backenders"
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white p-6 max-w-md mx-auto rounded-2xl shadow-xl space-y-3">
      <h2 className="text-2xl font-bold text-center text-purple-300">OSHI MARK 🐰⚡</h2>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="bg-black text-purple-300 font-semibold py-1 px-2">Nickname</div>
        <div className="bg-purple-900 py-1 px-2">{data.nickname}</div>

        <div className="bg-black text-purple-300 font-semibold py-1 px-2">Birthday</div>
        <div className="bg-purple-900 py-1 px-2">{data.birthday}</div>

        <div className="bg-black text-purple-300 font-semibold py-1 px-2">Birth Place</div>
        <div className="bg-purple-900 py-1 px-2">{data.birthPlace}</div>

        <div className="bg-black text-purple-300 font-semibold py-1 px-2">Blood Type</div>
        <div className="bg-purple-900 py-1 px-2">{data.bloodType}</div>

        <div className="bg-black text-purple-300 font-semibold py-1 px-2">Hobbies</div>
        <div className="bg-purple-900 py-1 px-2">{data.hobbies}</div>

        <div className="bg-black text-purple-300 font-semibold py-1 px-2">Music</div>
        <div className="bg-purple-900 py-1 px-2">{data.music}</div>

        <div className="bg-black text-purple-300 font-semibold py-1 px-2">Motto</div>
        <div className="bg-purple-900 py-1 px-2">{data.motto}</div>

        <div className="bg-black text-purple-300 font-semibold py-1 px-2">Fanart</div>
        <div className="bg-purple-900 py-1 px-2">#{data.fanart}</div>

        <div className="bg-black text-purple-300 font-semibold py-1 px-2">NSFW Fanart</div>
        <div className="bg-purple-900 py-1 px-2">#{data.nsfwFanart}</div>

        <div className="bg-black text-purple-300 font-semibold py-1 px-2">Fandom Name</div>
        <div className="bg-purple-900 py-1 px-2">{data.fandomName}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
