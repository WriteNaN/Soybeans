import Head from "next/head";

export default function NotFound() {
  return (
    <div>
      <Head>
        <title>Soybeans Finance - Not Found</title>
      </Head>
      <link rel="stylesheet" href="/styles/dynamic-home.css" />

      <div className="bg-pattern p-30 justify-center h-screen overflow-hidden bg-fixed bg-contain flex flex-col">

        <div className="h-screen flex items-center justify-center p-4 relative z-20">
          <div className="bg-blue-500/30 glow-blue p-4 w-full md:w-2/4 lg:w-1/3 xl:w-1/2 mx-auto rounded-lg text-center md:text-left text-white relative">
            <img
              src="/img/solana/encrypted.webp"
              alt="404"
              className="w-auto floating glow-blue h-auto mx-auto md:mx-0"
            />
            <h1 className="text-3xl font-bold mt-4 manrope glow-blue">Oops! Page Not Found</h1>
            <p className="mt-2 glow-blue manrope pb-10">
              Unfortunately the page you're looking for doesn't exist. If you believe this is an error, feel free to contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
