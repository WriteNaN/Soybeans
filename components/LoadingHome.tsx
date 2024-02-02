import Head from "next/head";
import Starfield from "./Starfield";
import { FaXTwitter as FaTwitter, FaDiscord, FaGithub } from "react-icons/fa6";
import { LinearGradient, RadialGradient } from "react-text-gradients";
import Link from "next/link";

export default function Loading() {
  return (
    <div className="relative h-screen flex items-center justify-center mount-in-fade">
      <Head>
        <title>Loading Soybeans...</title>
      </Head>

      <Starfield />

      <div className="audiowide select-none flex flex-col items-center">
      <RadialGradient gradient={['red, blue']} className="text-5xl">
        SoyBeans
      </RadialGradient>

      <h1 className="h1">
        <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]} className="align-center">
         ~ Powered By Solana
        </LinearGradient>
      </h1>
    </div>

      <div className="absolute bottom-4 right-4">
        <footer className="flex items-center text-white">
          <Link href="https://twitter.com/<edit this>" legacyBehavior>
          <a
            href="https://twitter.com/<edit this>"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 text-slate-900 hover:text-slate-600"
          >
            <FaTwitter size={16} />
          </a>
          </Link>
          <Link href="<edit this>" legacyBehavior>
          <a
            href="https://discord.com/<customize link>"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 text-slate-800 hover:text-blue-800"
          >
            <FaDiscord size={16} />
          </a>
          </Link>
          <Link href='https://github.com/<project github>' legacyBehavior>
          <a
            href="https://github.com/<project github>"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600"
          >
            <FaGithub size={16} />
          </a>
          </Link>
        </footer>
      </div>
    </div>
  );
}
