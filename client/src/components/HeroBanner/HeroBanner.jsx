import React from "react";
import "./HeroBanner.css";

const HeroBanner = ({ tag, title, text }) => {
  return (
    <div className="hero-banner bg-[url('https://skymavis.com/_app/immutable/assets/ImageBackgroundJobDetailMobile-2dbabf27.png')] md:bg-[url('https://skymavis.com/_app/immutable/assets/axie-concept-f5e52a79.png')] container max-w-full mx-auto text-center flex flex-col align-middle justify-center px-4 md:px-8 py-[6rem] gap-4 lg:gap-6">
      <div>
        <span class="inline-block whitespace-nowrap rounded-[0.35rem] bg-sky-500 px-[0.8rem] py-[0.5rem] text-center align-baseline text-[0.75em] font-bold leading-none text-white">
          Engineer
        </span>
      </div>
      <h2 className="text-4xl xl:text-5xl font-black">DevOps Engineer</h2>
      <p className="text-base xl:text-lg font-light">
        Vietnam , Ho Chi Minh City - Full-time
      </p>
    </div>
  );
};

export default HeroBanner;
