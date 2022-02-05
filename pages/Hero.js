import LogoWords from "../public/landingpage/logowords.svg";
import BlueBlurryBallLeft from "../public/landingpage/blueblurryballleft.svg";
import BlueBlurryBallRight from "../public/landingpage/blueblurryballright.svg";
import PinkBlurryBall from "../public/landingpage/pinkblurryball.svg";

const Hero = () => {
  return (
    <div className="w-3/4 h-screen relative">
      <div className="my-44 ml-28">
        <LogoWords />
        <div className="text-gray-500 col-start-2 col-end-5 row-start-3 row-end-4 mb-8">
          <p>Read Blogs anytime anywhere and pay for what you read.</p>
          <p>Get some rare NFTs for your active time.</p>
        </div>
        <button
          type="button"
          className="py-2 px-8 text-center shadow-lg shadow-pink-200 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-l from-fuchsia-400 to-blue-500"
        >
          Read Blogs
        </button>
      </div>
      <PinkBlurryBall className="absolute -top-80 left-96 -right-20" />
      <BlueBlurryBallRight className="absolute -top-20 -right-3/4 left-80" />
      <BlueBlurryBallLeft className="absolute w-full -left-2/3 top-0" />
    </div>
  );
};

export default Hero;
