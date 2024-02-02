import { Inter } from "next/font/google";
import Head from "next/head";
import AwaitLoad from "@/components/HomeLoad";
import Hero from "@/components/Hero";
import SeoTags from "@/components/SeoTags";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <AwaitLoad>
        <Head>
          <title>Soybeans Finance</title>
          <link rel="icon" type="image/png" href="/favicon.png" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        <SeoTags />

        <div id="app" className="mount-in-right" data-v-app>
          <Hero />
        </div>
      </AwaitLoad>
    </main>
  );
}
