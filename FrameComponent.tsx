import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start pt-[70px] px-5 pb-0 box-border relative gap-[72px] max-w-full text-left text-31xl-6 text-white font-outfit mq450:gap-[18px] mq925:pt-[29px] mq925:box-border mq1350:gap-9 mq1350:pt-[45px] mq1350:box-border ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]" />
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-gray-200 z-[1]" />
      </div>
      <div className="w-[882px] flex flex-row items-start justify-center pt-0 pb-[13px] pl-0 pr-px box-border max-w-full">
        <nav className="m-0 w-[533px] flex flex-row items-start justify-between gap-5 max-w-full whitespace-nowrap text-left text-lg text-white font-outfit mq450:flex-wrap">
          <a className="[text-decoration:none] relative font-light text-[inherit] inline-block min-w-[90px] z-[2]" href="#section1">
            Homepage
          </a>
          <a className="[text-decoration:none] relative font-light text-[inherit] inline-block min-w-[93px] z-[2]" href="#section2">
            Tokenomics
          </a>
          <a className="[text-decoration:none] relative font-light text-[inherit] inline-block min-w-[79px] z-[2]" href="#section3">
            Roadmap
          </a>
          <nav className="m-0 w-[533px] flex flex-row items-start justify-between gap-0 max-w-full whitespace-nowrap text-left text-lg text-white font-outfit mq450:flex-wrap">
          <a className="[text-decoration:none] relative font-light text-[inherit] z-[2]" href={process.env.REACT_APP_TWITTER}>
          <img className="h-10 w-10"
            loading="lazy"
            alt=""
            src="/twitter.png" />
          </a>
          <a className="[text-decoration:none] relative font-light text-[inherit] z-[2]" href={process.env.REACT_APP_TELEGRAM}>
          <img className="h-10 w-10"
            loading="lazy"
            alt=""
            src="/telegram.webp" />
          </a>
          <a className="[text-decoration:none] relative font-light text-[inherit] z-[2]" href={process.env.REACT_APP_DEXSCREENER}>
          <img className="h-10 w-10"
            loading="lazy"
            alt=""
            src="/dexscreener.png" />
          </a>
        </nav>
        </nav>
      </div>
      <div className="w-[882px] flex flex-row items-start justify-start py-0 pl-2 pr-[9px] box-border max-w-full" id="section1">
        <div className="flex-1 flex flex-col items-start justify-start gap-[23px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[23px] pr-5">
            <div className="relative z-[2] mq450:text-11xl mq925:text-21xl">
              Your championship starts here.
            </div>
          </div>
          <div className="self-stretch relative text-5xl-1 font-extralight text-darkgray z-[2] mq450:text-lgi text-center">
          Become a champion by being apart of NBA Champion Jaylen's Brown's very own crypto coin $CHAMP.
          </div>
        </div>
      </div>
      <img
        className="w-[881px] relative max-h-full object-cover max-w-full z-[2]"
        loading="lazy"
        alt=""
        src="/jaylenbrowncelticsupscaledstandard-v226x-1@2x.png"
      />
    </section>
  );
};

export default FrameComponent;
