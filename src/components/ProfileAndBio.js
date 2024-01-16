import Image from 'next/image';
import BioSection from './BioSection';

const ProfileAndBio = () => {

  return (
    <div id="profile-picture" className="flex flex-col md:flex-row items-center md:space-x-4 p-4">
      <div className={`mb-4 md:mb-0 w-96 flex-shrink-0 w-96 h-96 rounded-full overflow-hidden`}>
        <Image
          src="/profile.jpg" // Replace with your image path
          alt="Profile Picture"
          width={600} // TailwindCSS size 64 corresponds to 256px
          height={500}
          className="object-cover h-full" // Ensure image covers the full height
        />
      </div>
      <div className="flex-grow">
        <BioSection />
      </div>
    </div>
  );
};

export default ProfileAndBio;
