import Carousel from "../global/Carousel";

const articleData = [
  {
    id: 1,
    subject:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    author: "Sreekar Sarvepalli",
    pfpSrc: "/landingpage/hottestguy.png",
    position: "Blockchain Specialist",
  },
  {
    id: 2,
    subject:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    author: "Sreekar Sarvepalli",
    pfpSrc: "/landingpage/hottestguy.png",
    position: "Blockchain Specialist",
  },
  {
    id: 3,
    subject:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    author: "Sreekar Sarvepalli",
    pfpSrc: "/landingpage/hottestguy.png",
    position: "Blockchain Specialist",
  },
  {
    id: 4,
    subject:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    author: "Sreekar Sarvepalli",
    pfpSrc: "/landingpage/hottestguy.png",
    position: "Blockchain Specialist",
  },
  {
    id: 5,
    subject:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    author: "Sreekar Sarvepalli",
    pfpSrc: "/landingpage/hottestguy.png",
    position: "Blockchain Specialist",
  },
  {
    id: 6,
    subject:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    author: "Sreekar Sarvepalli",
    pfpSrc: "/landingpage/hottestguy.png",
    position: "Blockchain Specialist",
  },
  {
    id: 7,
    subject:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    author: "Sreekar Sarvepalli",
    pfpSrc: "/landingpage/hottestguy.png",
    position: "Blockchain Specialist",
  },
  {
    id: 8,
    subject:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    author: "Sreekar Sarvepalli",
    pfpSrc: "/landingpage/hottestguy.png",
    position: "Blockchain Specialist",
  },
];

const LatestArticles = () => {
  return (
    <div className="h-[65vh] my-20">
      <h1 className="text-3xl px-40 pb-20 font-bold">Latest Articles</h1>
      <Carousel data={articleData} />
    </div>
  );
};

export default LatestArticles;
