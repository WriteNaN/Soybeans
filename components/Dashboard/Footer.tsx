import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa6";

export default function Footer () {
    return (
        <footer className="bg-gradient-to-r from-slate-800 to-black text-white p-1 rounded-t-3xl flex items-center justify-between manrope">
        <div className="glow-blue text-sm px-3 py-2">
          &copy; 2024 Soybeans Finance
        </div>
        <div className="flex items-center px-3">
          <Link
            href="#"
            className="text-blue-500 hover:opacity-60 mx-1 glow-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={16} />
          </Link>
          <Link
            href="#"
            className="text-blue-700 hover:opacity-60 glow-white mx-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord size={16} />
          </Link>
          <Link
            href="#"
            className="text-pink-800 hover:opacity-60 glow-white mx-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={16} />
          </Link>
        </div>
      </footer>
    );
}