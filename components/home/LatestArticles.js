import Carousel from "../global/Carousel";

const articleData = [
  {
    id: 1,
    subject:
      "We launched a new global open source community called Web3 Community in September. And now Web3 Community is a group of 250+ open source and blockchain enthusiasts, learning and growing together.",
    author: "Ritvik Shukla",
    pfpSrc: "/landingpage/hottestguy.png",
    position: "Student | Poet | Writer | Singer",
    url: "https://dev.to/webxdao/companies-looking-for-people-to-hire-p0i",
  },
  {
    id: 2,
    subject:
      "Dev Protocol is now open to Open Source Community, everyone can join on GitHub organization and chat on their Discord server. We are making the Web3 Community an educational platform for aspiring blockchain developers...",
    author: "Vincent Villafuerte",
    pfpSrc: "/landingpage/vincent villafuerte.png",
    position: "Blockchain Specialist",
    url: "https://dev.to/webxdao/dev-protocol-open-source-community-for-blockchain-technology-is-now-open-114b",
  },
  {
    id: 3,
    subject:
      "Accelerate Your Learnings With Web3Community and Build Your First Web 3.0 App. What's Web 3.0 all about? For this question, We'd need to first deep dive into Web2.0, for a better understanding of the web.",
    author: "Krish Gupta",
    pfpSrc: "/landingpage/krish gupta.png",
    position: "Blockchain Specialist",
    url: "https://dev.to/webxdao/accelerate-your-learnings-with-web3community-and-build-your-first-web-3-0-app-1810",
  },
  {
    id: 4,
    subject:
      "Hacktoberfest starts today. This year Web3Community is excited to take part in the fest for the first time. An excellent opportunity for everyone to learn more about the open-source environment...",
    author: "Ritvik Shukla",
    pfpSrc: "/landingpage/hottestguy.png",
    position: "Student | Poet | Writer | Singer",
    url: "https://dev.to/webxdao/web-3-community-hacktoberfest-2021-41mi",
  },
  {
    id: 5,
    subject:
      "We are launching a new global open source community called Web3 Community that will be focus on Web3, Blockchain, and somewhat related to decentralized applications (Dapp).",
    author: "Vincent Villafuerte",
    pfpSrc: "/landingpage/vincent villafuerte.png",
    position: "Blockchain Specialist",
    url: "https://dev.to/webxdao/introducing-web-3-community-3co5",
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
