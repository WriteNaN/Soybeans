import type { AppProps } from "next/app";
import SeoTags from "@/components/SeoTags";

import "@/styles/globals.css";
import "@/styles/extend.css";
import "@/styles/fonts.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="select-none" suppressHydrationWarning>
      <SeoTags />
      <Component {...pageProps} />
    </div>
  );
}
