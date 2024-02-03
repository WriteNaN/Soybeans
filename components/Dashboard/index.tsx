import Script from "next/script";

export default function Dashboard () {
    return (
        <div>
            <div className="livecoinwatch-widget-5 manrope glow-blue" lcw-base="USD" lcw-color-tx="#999999" lcw-marquee-1="coins" lcw-marquee-2="movers" lcw-marquee-items="10" ></div>

            <Script defer src="https://www.livecoinwatch.com/static/lcw-widget.js" strategy="beforeInteractive" onLoad={() => alert("loaded")}></Script>
        </div>
    );
}