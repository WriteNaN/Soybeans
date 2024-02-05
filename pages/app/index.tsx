"use client";

import Head from "next/head";
import styles from "@/styles/App.module.css";
import Navbar from "@/components/Dashboard/Navbar";
import Image from "next/image";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import Footer from "@/components/Dashboard/Footer";
import Provider from "@/context/Provider";
import { LinearGradient, RadialGradient } from "react-text-gradients";
import Starfield from "@/components/StarfieldX";
import useLocalStorageState from "use-local-storage-state";
import Dashboard from "@/components/Dashboard";
import Account from "@/components/Account";

export default function App() {
  const [isConnected, setConnected] = useLocalStorageState("isConnected", {
    defaultValue: false,
  });
  const [isAccountScreen, setAccountScreen] = useLocalStorageState(
    "current-view",
    {
      defaultValue: false,
    }
  );

  return (
    <div className={`flex flex-col overflow-hidden ${styles["dashboard"]}`}>
      <Provider>
        <Head>
          <title>Soybeans Finance - Dashboard</title>
          <link rel="icon" type="image/png" href="/favicon.png" />
          <meta
            name="format-detection"
            content="telephone=no, date=no, email=no, address=no"
          />
        </Head>

        <WalletModalProvider>
          <div className="!w-full !h-full">
            <Navbar />
            {!isConnected ? (
              <>
                <Starfield />
                <div className="flex items-center justify-center h-screen select-none">
                  <div className="bg-gray-800/30 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 p-6 glow-blue sm:w-3/4 rounded-md overflow-hidden flex flex-col md:flex-row shadow-lg">
                    <div className="md:w-1/2 relative">
                      <Image
                        width={1000}
                        height={1000}
                        alt="solana-x"
                        src="/img/solana/contract.webp"
                        className="w-full h-full object-cover glow-blue floating-2 rounded-md"
                      />
                    </div>
                    <div className="md:w-1/2 md:pl-6 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold mb-4 glow-white audiowide">
                        <RadialGradient
                          gradient={["red, blue"]}
                          className="text-md"
                        >
                          SoyBeans Dashboard
                        </RadialGradient>
                      </h2>
                      <p className="text-gray-300 mb-4 manrope glow-white">
                        <LinearGradient
                          gradient={["to left", "#17acff ,#ff68f0"]}
                          className="align-center"
                        >
                          Connect to the solana blockchain through your wallet
                          adapter to interact with our DAPP.
                        </LinearGradient>
                      </p>
                      <WalletMultiButton className="glow-white mb-4 w-full" />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div>{isAccountScreen ? <Account /> : <Dashboard />}</div>
            )}
          </div>
        </WalletModalProvider>

        <Footer />
      </Provider>
    </div>
  );
}
