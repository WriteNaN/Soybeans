import Navbar from "@/components/Home/Navbar";
import Link from "next/link";
import { LinearGradient, RadialGradient } from "react-text-gradients";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div>
      <link rel="stylesheet" href="/styles/dynamic-home.css" />
      <div className="h-screen select-none">
        <Navbar />
        {/**/}
        {/**/}
        <div className="flex flex-col relative w-full h-screen w-screen overflow-hidden px-3 md:px-7 py-0 bg-lp-blue-8 relative bg-pattern bg-fixed bg-contain">
          <div className="w-full mx-auto max-w-8xl lg:max-w-7xl md:max-w-4xl my-auto">
            <div className="relative z-2 flex flex-col gap-5 items-start justify-center items-center">
              {/**/}
              {/**/}
              <p className="w-full max-w-prose text-base font-medium text-white text-center" />
            </div>
            <img
              src="/img/effect.svg"
              alt="effect-7"
              className="absolute right-0 top-0"
            />
            <div className="flex md:flex-row flex-col items-center justify-between w-full sm:py-46 py-24 gap-10">
              <div className="flex flex-col items-start gap-5 sm:max-w-xl max-w-none font-manrope z-4 relative">
                <h1 className="text-red-600 text-4xl">
                  <LinearGradient
                    gradient={["to left", "#17acff ,#ff68f0"]}
                    className="align-center glow-blue"
                  >
                    {" "}
                    Earn real yield on any liquid asset powered by market
                    volatility on Solana!{" "}
                  </LinearGradient>
                </h1>
                <p className="text-base text-white/75">
                  <TypeAnimation
                    sequence={[
                      "Get broad crypto exposure from blue chips to microcaps and earn real yield powered by market volatility and arbitrage. Simply wrap or buy into a field, provide liquidity, sit back, relax, and earn $BEANS forever.",
                    ]}
                    wrapper="span"
                    speed={99}
                    className="manrope glow-blue"
                    style={{ fontSize: "1em", display: "inline-block" }}
                    repeat={0}
                  />
                </p>
                <div className="flex sm:flex-row flex-col sm:items-center items-start gap-5 mt-5">
                  <Link href="/links/buy-soybeans" legacyBehavior>
                  <a
                    className="sm:w-max w-full"
                    href="/links/buy-soybeans"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      className="text-center rounded flex items-center justify-center gap-2 font-semibold px-3 py-2.5 text-base rounded rounded-full fancy glow-blue bg-white text-black-2 rounded-full w-full"
                    >
                      <span>
                        <LinearGradient
                          gradient={["to left", "#17acff ,#ff68f0"]}
                          className="align-center"
                        >
                          BUY $BEANS
                        </LinearGradient>
                      </span>
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-black"
                      >
                        <g id="fluent:arrow-right-20-filled">
                          <path
                            id="Vector"
                            d="M11.265 3.20501C11.1196 3.0733 10.9284 3.00381 10.7324 3.01143C10.5363 3.01905 10.3511 3.10317 10.2164 3.24575C10.0816 3.38834 10.0081 3.57804 10.0116 3.77418C10.0151 3.97032 10.0953 4.15729 10.235 4.29501L15.474 9.25001H2.75C2.55109 9.25001 2.36032 9.32902 2.21967 9.46968C2.07902 9.61033 2 9.80109 2 10C2 10.1989 2.07902 10.3897 2.21967 10.5303C2.36032 10.671 2.55109 10.75 2.75 10.75H15.476L10.235 15.707C10.161 15.774 10.1012 15.8551 10.0589 15.9456C10.0167 16.036 9.99295 16.134 9.98907 16.2337C9.9852 16.3335 10.0013 16.433 10.0364 16.5265C10.0714 16.6199 10.1248 16.7054 10.1934 16.778C10.2619 16.8505 10.3443 16.9087 10.4356 16.949C10.5269 16.9893 10.6254 17.011 10.7252 17.0127C10.825 17.0145 10.9242 16.9963 11.0168 16.9593C11.1095 16.9223 11.1939 16.8671 11.265 16.797L17.683 10.727C17.8427 10.5766 17.9481 10.3776 17.983 10.161C18.0066 10.0525 18.0059 9.94018 17.981 9.83201C17.9448 9.6189 17.8402 9.42337 17.683 9.275L11.265 3.20501Z"
                            fill="currentColor"
                          />
                        </g>
                      </svg>
                    </button>
                  </a>
                  </Link>
                  <Link href="/app" legacyBehavior>
                  <a href="/app" className="sm:w-max w-full">
                    <button
                      type="button"
                      className="text-center rounded flex items-center glow-blue justify-center gap-2 font-semibold px-3 py-2.5 text-base rounded rounded-full bg-white text-black-2 rounded-full w-full"
                    >
                      <span>
                        <LinearGradient
                          gradient={["to left", "#17acff ,#ff68f0"]}
                          className="align-center"
                        >
                          Launch App
                        </LinearGradient>
                      </span>
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-black-2"
                      >
                        <g id="fluent:arrow-right-20-filled">
                          <path
                            id="Vector"
                            d="M11.265 3.20501C11.1196 3.0733 10.9284 3.00381 10.7324 3.01143C10.5363 3.01905 10.3511 3.10317 10.2164 3.24575C10.0816 3.38834 10.0081 3.57804 10.0116 3.77418C10.0151 3.97032 10.0953 4.15729 10.235 4.29501L15.474 9.25001H2.75C2.55109 9.25001 2.36032 9.32902 2.21967 9.46968C2.07902 9.61033 2 9.80109 2 10C2 10.1989 2.07902 10.3897 2.21967 10.5303C2.36032 10.671 2.55109 10.75 2.75 10.75H15.476L10.235 15.707C10.161 15.774 10.1012 15.8551 10.0589 15.9456C10.0167 16.036 9.99295 16.134 9.98907 16.2337C9.9852 16.3335 10.0013 16.433 10.0364 16.5265C10.0714 16.6199 10.1248 16.7054 10.1934 16.778C10.2619 16.8505 10.3443 16.9087 10.4356 16.949C10.5269 16.9893 10.6254 17.011 10.7252 17.0127C10.825 17.0145 10.9242 16.9963 11.0168 16.9593C11.1095 16.9223 11.1939 16.8671 11.265 16.797L17.683 10.727C17.8427 10.5766 17.9481 10.3776 17.983 10.161C18.0066 10.0525 18.0059 9.94018 17.981 9.83201C17.9448 9.6189 17.8402 9.42337 17.683 9.275L11.265 3.20501Z"
                            fill="currentColor"
                          />
                        </g>
                      </svg>
                    </button>
                  </a>
                  </Link>
                </div>
              </div>
              <img
                src="/img/solana/double_sol.webp"
                alt="hero"
                className="h-auto w-auto z-4 floating glow-blue"
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="absolute bottom-5 flex justify-center items-center text-center w-full select-none">
        <RadialGradient
          gradient={["pink", "purple"]}
          className="text-xs manrope"
        >
          &copy; SoyBeans 2024
        </RadialGradient>
      </footer>
    </div>
  );
}
