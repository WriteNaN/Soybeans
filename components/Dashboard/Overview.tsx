import { LinearGradient } from "react-text-gradients";
import CountUp from "react-countup";

// TODO: dynamic realtime fetching
export default function Overview() {
  return (
    <div className="grid grid-cols-1 glow-blue sm:grid-cols-2 gap-4 max-w-screen-lg mx-auto">
      <div className="bg-blue-600/10 text-white p-4 rounded-md shadow-md flex flex-col sm:flex-row items-center">
        <img
          src="/img/solana/treasure.webp"
          alt="sol2"
          className="w-20 h-20 object-cover rounded-md mb-2 sm:mb-0 sm:mr-4 floating-2"
        />
        <div>
          <h2 className="text-md font-semibold">
            <LinearGradient
              gradient={["to left", "blue, red"]}
              className="glow-blue"
            >
              Value Locked
            </LinearGradient>
          </h2>
          <p className="text-3xl font-medium glow-blue audiowide">
            <CountUp end={1200000} prefix="$" />
          </p>
          <p className="text-sm text-gray-300 glow-blue">49 Bean Farms</p>
        </div>
      </div>

      <div className="bg-blue-600/10 text-white p-4 rounded-md shadow-md flex flex-col sm:flex-row items-center">
        <img
          src="/img/solana/plant.webp"
          alt="sol2"
          className="w-20 h-20 object-cover rounded-md mb-2 sm:mb-0 sm:mr-4 floating-2"
        />
        <div>
          <h2 className="text-md font-semibold">
            <LinearGradient
              gradient={["to left", "blue, red"]}
              className="glow-blue"
            >
              Yield Generated
            </LinearGradient>
          </h2>
          <p className="text-3xl font-medium glow-blue audiowide">
            <CountUp end={220443} prefix="$" />
          </p>
          <p className="text-sm text-gray-300">246,554 $BEANS</p>
        </div>
      </div>

      <div className="bg-blue-600/10 text-white p-4 rounded-md shadow-md flex flex-col sm:flex-row items-center">
        <img
          src="/img/solana/wallet.webp"
          alt="sol2"
          className="w-20 h-20 object-cover rounded-md mb-2 sm:mb-0 sm:mr-4 floating-2"
        />
        <div>
          <h2 className="text-md font-semibold">
            <LinearGradient
              gradient={["to left", "blue, red"]}
              className="glow-blue"
            >
              BEANs Burnt
            </LinearGradient>
          </h2>
          <p className="text-3xl font-medium glow-blue audiowide">
            <CountUp end={220443} prefix="$" />
          </p>
          <p className="text-sm text-gray-300">246,554 $BEANS</p>
        </div>
      </div>

      <div className="bg-blue-600/10 text-white p-4 rounded-md shadow-md flex flex-col sm:flex-row items-center">
        <img
          src="/img/solana/globe.webp"
          alt="sol2"
          className="w-20 h-20 object-cover rounded-md mb-2 sm:mb-0 sm:mr-4 floating-2"
        />
        <div>
          <h2 className="text-md font-semibold">
            <LinearGradient
              gradient={["to left", "blue, red"]}
              className="glow-blue"
            >
              Swap Fees
            </LinearGradient>
          </h2>
          <p className="text-3xl font-medium glow-blue audiowide">
            <CountUp end={220443} prefix="$" />
          </p>
          <p className="text-sm text-gray-300">246,554 $BEANS</p>
        </div>
      </div>
    </div>
  );
}
