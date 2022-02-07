import Logo from "../../public/Logo.svg";

export default function Footer() {
  return (
    <footer
      className="bg-white py-10 px-5 md:p-20"
      aria-labelledby="footer-heading"
    >
      <div className="grid grid-cols-3 gap-2">
        <div className="space-y-4 col-span-3 lg:col-span-1">
          <Logo />
          <p className="text-gray-400 text-base pr-6">
            Read Blogs anytime anywhere and pay for what you read.
          </p>
        </div>
        <div className="font-nunito mt-5 grid grid-cols-3 gap-2 col-span-3 lg:col-span-2">
          <div className="col-span-3 md:col-span-1 md:gap-4">
            <div className="mt-6 md:mt-0">
              <h3 className="font-semibold tracking-wider uppercase">
                Services
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base  hover:text-gray-900">
                    Email Marketing
                  </a>
                </li>

                <li>
                  <a href="#" className="text-base  hover:text-gray-900">
                    Campaigns
                  </a>
                </li>

                <li>
                  <a href="#" className="text-base  hover:text-gray-900">
                    Branding
                  </a>
                </li>

                <li>
                  <a href="#" className="text-base  hover:text-gray-900">
                    Offline
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 md:gap-4">
            <div className="mt-6 md:mt-0">
              <h3 className="font-semibold tracking-wider uppercase">About</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base  hover:text-gray-900">
                    Our Story
                  </a>
                </li>

                <li>
                  <a href="#" className="text-base  hover:text-gray-900">
                    Benefits
                  </a>
                </li>

                <li>
                  <a href="#" className="text-base  hover:text-gray-900">
                    Team
                  </a>
                </li>

                <li>
                  <a href="#" className="text-base  hover:text-gray-900">
                    Career
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 md:gap-4">
            <div className="mt-6 md:mt-0">
              <h3 className="font-semibold tracking-wider uppercase">
                Follow Us
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <a
                    href="https://twitter.com/webxdao"
                    className="flex text-base  hover:text-gray-900"
                  >
                    <svg
                      className="h-6 w-6 "
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>{" "}
                    &nbsp; Twitter
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/WebXDAO"
                    className="flex text-base  hover:text-gray-900"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>{" "}
                    &nbsp; GitHub
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/company/web3community/"
                    className="flex text-base  hover:text-gray-900"
                  >
                    <svg
                      className="h-6 w-6"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.41 0.000139831H1.47C1.27958 -0.00250479 1.0905 0.0323873 0.913566 0.102824C0.73663 0.17326 0.575303 0.27786 0.438797 0.410652C0.302292 0.543443 0.193281 0.701824 0.117992 0.876749C0.0427024 1.05167 0.00260839 1.23972 0 1.43014V18.5701C0.00260839 18.7606 0.0427024 18.9486 0.117992 19.1235C0.193281 19.2985 0.302292 19.4568 0.438797 19.5896C0.575303 19.7224 0.73663 19.827 0.913566 19.8975C1.0905 19.9679 1.27958 20.0028 1.47 20.0001H18.41C18.6004 20.0028 18.7895 19.9679 18.9664 19.8975C19.1434 19.827 19.3047 19.7224 19.4412 19.5896C19.5777 19.4568 19.6867 19.2985 19.762 19.1235C19.8373 18.9486 19.8774 18.7606 19.88 18.5701V1.43014C19.8774 1.23972 19.8373 1.05167 19.762 0.876749C19.6867 0.701824 19.5777 0.543443 19.4412 0.410652C19.3047 0.27786 19.1434 0.17326 18.9664 0.102824C18.7895 0.0323873 18.6004 -0.00250479 18.41 0.000139831V0.000139831ZM6.03 16.7401H3.03V7.74014H6.03V16.7401ZM4.53 6.48014C4.11626 6.48014 3.71947 6.31578 3.42691 6.02323C3.13436 5.73067 2.97 5.33388 2.97 4.92014C2.97 4.5064 3.13436 4.10961 3.42691 3.81705C3.71947 3.5245 4.11626 3.36014 4.53 3.36014C4.7497 3.33522 4.97218 3.35699 5.18288 3.42402C5.39357 3.49105 5.58774 3.60183 5.75266 3.7491C5.91757 3.89637 6.04953 4.07682 6.13987 4.27862C6.23022 4.48043 6.27692 4.69904 6.27692 4.92014C6.27692 5.14124 6.23022 5.35985 6.13987 5.56166C6.04953 5.76346 5.91757 5.94391 5.75266 6.09118C5.58774 6.23845 5.39357 6.34923 5.18288 6.41626C4.97218 6.48329 4.7497 6.50505 4.53 6.48014V6.48014ZM16.85 16.7401H13.85V11.9101C13.85 10.7001 13.42 9.91014 12.33 9.91014C11.9927 9.91261 11.6642 10.0184 11.3888 10.2133C11.1135 10.4082 10.9045 10.6828 10.79 11.0001C10.7117 11.2352 10.6778 11.4827 10.69 11.7301V16.7301H7.69C7.69 16.7301 7.69 8.55014 7.69 7.73014H10.69V9.00014C10.9625 8.52725 11.3589 8.13766 11.8364 7.87334C12.314 7.60902 12.8546 7.47999 13.4 7.50014C15.4 7.50014 16.85 8.79014 16.85 11.5601V16.7401Z"
                        fill="black"
                      />
                    </svg>
                    &nbsp; LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-12 border-t border-gray-200 pt-8">
        <p className="col-start-1 col-end-3 md:text-base text-gray-400 xl:text-left text-xs">
          Copyright &copy; 2022. WebX DAO. All rights reserved.
        </p>

        <a
          href="#"
          className="col-start-3 place-self-end md:text-base  hover:text-gray-900 text-xs"
        >
          Terms & Conditions
        </a>
        <a
          href="#"
          className="col-start-4 place-self-end md:text-base  hover:text-gray-900 text-xs"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
