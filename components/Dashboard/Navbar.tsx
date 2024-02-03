import Link from "next/link";
import { LinearGradient } from "react-text-gradients";
import { GiSpellBook } from "react-icons/gi";
import { toast, Toaster } from "react-hot-toast";
import { useWallet } from "@solana/wallet-adapter-react";
import { IoLogOut } from "react-icons/io5";
import { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function Navbar() {
  const { connected, disconnect } = useWallet();
  const [isConnected, setConnected] = useLocalStorageState("isConnected", {
    defaultValue: false,
  });
  useEffect(() => {
    // unfortunately i had to do this lol. state wasn't updating in main code;
    setConnected(connected);
  }, [connected]);
  const docNotReady = () => {
    return toast("We're working it!", {
      icon: "🧙‍♂️",
      style: {
        borderRadius: "10px",
        background: "linear-gradient(45deg, blue, red)",
        color: "#fff",
      },
      className:
        "text-sm glow-blue manrope bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900",
    });
  };

  return (
    <nav
      className="relative top-0 w-full z-20 border-none"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="flex items-center justify-between py-3 px-8 w-full glow-blue">
        <Link href="/" legacyBehavior>
          <a
            aria-current="page"
            href="/"
            className="router-link-active router-link-exact-active flex items-center"
          >
            <img
              src="/img/bean.png"
              alt=""
              style={{ maxWidth: "36px" }}
              className="mr-2"
            />
            <span className="text-white audiowide text-md">
              <LinearGradient
                gradient={["to left", "brown , #6F4E37"]}
                className="align-center"
              >
                Soybeans
              </LinearGradient>
            </span>
          </a>
        </Link>
        <div className="flex items-center">
          {!connected ? (
            <button
              className="flex items-center text-white mx-4 px-4 py-2 rounded-lg"
              onClick={docNotReady}
            >
              <GiSpellBook size={24} />
              <span className="text-sm manrope"></span>
            </button>
          ) : (
            <button
              className="flex items-center text-white mx-4 px-4 py-2 rounded-lg"
              onClick={() => disconnect()}
            >
              <IoLogOut size={24} className="hover:opacity-50" />
              <span className="text-sm manrope"></span>
            </button>
          )}
          <div className="flex items-center space-x-4"></div>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </nav>
  );
}
