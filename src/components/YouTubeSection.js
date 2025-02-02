import React from 'react';

const YouTubeSection = () => {
  return (
    <section id="youtube" className="my-10 py-10 md:py-20 px-6 md:px-20 bg-gray-900 rounded-lg">
      <div className="container mx-auto px-8">
        {/* Video wrapper with aspect ratio */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.tubebuddy.com/quicknav/latestembed/UC20Yz9-w3dtRmz6J3ij88ug"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            title="YouTube video"
          ></iframe>
        </div>
        {/* Subscribe button */}
        <div className="text-center py-2 mt-4">
          <div className="rounded-full bg-purple-600 text-white px-6 py-3 font-bold inline-block">
            <a
              href="https://www.youtube.com/@pixelemii?sub_confirmation=1"
              target="_blank"
              className="block"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
