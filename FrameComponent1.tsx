import { FunctionComponent } from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section  id="section2"
      className={`self-stretch flex flex-col items-center justify-start pt-[102px] px-5 pb-[215.4px] box-border relative gap-[102px] max-w-full text-left text-31xl-6 text-white font-outfit mq925:gap-[25px] mq925:pt-[43px] mq925:pb-[91px] mq925:box-border mq1350:gap-[51px] mq1350:pt-[66px] mq1350:pb-[140px] mq1350:box-border ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]" />
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-200 z-[1]" />
      </div>
      <div className="w-[1096px] flex flex-row items-start justify-center py-0 pl-0 pr-px box-border max-w-full">
        <div className="w-[865px] flex flex-col items-start justify-start gap-[23px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="relative z-[2] mq450:text-11xl mq925:text-21xl">
              Tokenomics made easy.
            </div>
          </div>
          <div className="self-stretch relative text-5xl-1 font-extralight text-darkgray z-[2] mq450:text-lgi text-center">
          Easy and simple tokenomics, a fair distribution, where our development team will only own 2.5% of the supply, and the rest will be in the liquidity pool, tradeable by the $CHAMP community.
          </div>
        </div>
      </div>
      <div className="w-[1096px] flex flex-row flex-wrap items-end justify-center gap-[30.7px] max-w-full text-13xl-1 mq925:gap-[15px]">
        <div className="h-[212.5px] w-[254.3px] flex flex-row items-start justify-start relative">
          <div className="h-[473.4px] w-[725.3px] absolute !m-[0] top-[-314.9px] right-[-639px]">
            {/* <img className="absolute top-[0px] left-[589.8px] rounded-[50%] border-white border-[0px] w-[418.8px] h-[418.8px] [transform:_rotate(90deg)] [transform-origin:0_0] z-[2]"
            loading="lazy"
            alt=""
            src="/ellipse.svg" /> */}
             <img className="absolute top-[0px] left-[167.59px] z-[6]"
            loading="lazy"
            alt=""
            src="/ellipse.svg" />
            <img
              className="absolute top-[277.4px] left-[0px] w-[205px] h-[74.5px] z-[6]"
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
            <img
              className="absolute top-[275.8px] left-[527.7px] w-[197.6px] h-[197.6px] object-contain z-[6]"
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-[6.6px]">
              <div className="relative font-medium inline-block min-w-[124px] z-[2] mq450:text-lgi mq925:text-7xl">
                97.5% LP
              </div>
              <div className="relative text-6xl-2 text-darkgray z-[2] mq450:text-xl">
                Liquidity pool
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[53px] box-border min-w-[344px] min-h-[583px] max-w-full mq450:min-w-full mq925:pb-[34px] mq925:box-border">
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="h-[529.3px] flex-1 relative max-w-full">
              {/* <div className="absolute top-[529.27px] left-[397.59px] rounded-[50%] bg-darkslategray w-[418.8px] h-[418.8px] [transform:_rotate(-161.7deg)] [transform-origin:0_0] z-[3]" /> */}
              {/* <img className="absolute top-[529.27px] left-[397.59px] w-[418.8px] h-[418.8px]"
            loading="lazy"
            alt=""
            src="/ellipse.svg" /> */}
              <div className="absolute top-[319.1px] left-[75px] w-[26px] h-[26px]">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gray-100 w-full h-full z-[4]" />
                <div className="absolute top-[5px] left-[5px] rounded-[50%] bg-white w-4 h-4 z-[5]" />
              </div>
              <div className="absolute top-[402.38px] left-[410.4px] rounded-[50%] bg-gray-100 w-[26px] h-[26px] [transform:_rotate(-135deg)] [transform-origin:0_0] z-[4]" />
              <div className="absolute top-[395.31px] left-[410.4px] rounded-[50%] bg-white w-4 h-4 [transform:_rotate(-135deg)] [transform-origin:0_0] z-[5]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[6.6px]">
          <div className="relative font-medium inline-block min-w-[129px] z-[7] mq450:text-lgi mq925:text-7xl">
            2.5% Dev
          </div>
          <div className="relative text-6xl-2 text-darkgray z-[2] mq450:text-xl">
            Developer percentage
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
