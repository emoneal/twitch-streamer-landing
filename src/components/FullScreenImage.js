import Image from 'next/image';

const FullScreenImage = () => {
  return (
    <div className="relative md:h-[calc(100vh-50px)] w-full">
      <div className="absolute inset-0">
        <Image
          src="/pixelcafebg.png"
          alt="Cozy Pixel Cafe"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
};

export default FullScreenImage;
