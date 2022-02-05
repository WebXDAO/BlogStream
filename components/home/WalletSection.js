import MetamaskWallet from "../../public/landingpage/metamaskwallet.svg";
import TrustWallet from "../../public/landingpage/trustwallet.svg";
import Coinbase from "../../public/landingpage/coinbase.svg";
import WalletCoonect from "../../public/landingpage/walletconnect.svg";
import MathWallet from "../../public/landingpage/mathwallet.svg";

const WalletSection = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-3/4">
        <div className="flex justify-around mx-20">
          <a href="#">
            <MetamaskWallet />
          </a>
          <a href="#">
            <TrustWallet />
          </a>
          <a href="#">
            <Coinbase />
          </a>
        </div>
        <div className="flex justify-around mx-40 ">
          <a href="#">
            <WalletCoonect />
          </a>
          <a href="#">
            <MathWallet />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WalletSection;
