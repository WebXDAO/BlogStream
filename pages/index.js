import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import Layout from "../components/global/Layout";
import BottomCard from "../components/home/BottomCard";
import HowItWork from "../components/home/howitwork";

import Hero from "../components/home/Hero";

export default function Home() {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    // inside of layout
    <Layout>
      <Hero />
      <HowItWork />
      <BottomCard />
    </Layout>
  );
}
