import TestimonialCarousel from "../global/TestimonialCarousel";

const testimonialData = [
  {
    id: 1,
    subject:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    author: "Vincent Villafuerte",
    pfpSrc: "/landingpage/vincent villafuerte.png",
    position: "Blockchain Specialist",
  },
  {
    id: 2,
    subject:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    author: "Ritvik Shukla",
    pfpSrc: "/landingpage/hottestguy.png",
    position: "Student | Poet | Writer | Singer",
  },
  {
    id: 3,
    subject:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    author: "Krish Gupta",
    pfpSrc: "/landingpage/krish gupta.png",
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
];

const Testimonials = () => {
  return (
    <div className="px-[5vw] h-[100vh] mb-32">
      <svg
        width="170"
        height="160"
        viewBox="0 0 170 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M141.742 147.399C159.291 145.245 171.735 128.897 169.523 110.884C167.313 92.8815 151.283 80.0189 133.733 82.1737C101.958 86.0751 115.397 20.434 157.778 15.2303L155.91 0.0109468C80.2702 9.28725 68.2512 156.423 141.742 147.399V147.399ZM50.1783 158.642C67.7171 156.488 80.1604 140.141 77.9486 122.128C75.7382 104.125 59.7084 91.2628 42.1696 93.4163C10.384 97.319 23.8231 31.6779 66.2039 26.4742L64.3352 11.2549C-11.2932 20.5298 -23.3123 167.665 50.1783 158.642V158.642Z"
          fill="#C767E5"
        />
      </svg>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-pink-400 font-bold text-lg mb-20">TESTIMONIALS</h1>
      </div>
      <TestimonialCarousel data={testimonialData} />
    </div>
  );
};

export default Testimonials;
