import { FunctionComponent } from "react";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch h-[762px] flex flex-row relative max-w-full text-center text-mid-7 text-white justify-center font-outfit ${className}`}
    >
      <div className="absolute top-[0px] w-full h-full justify-center">
        <div className="absolute top-[0px] w-full h-full justify-center" />
        <div className="absolute top-[0px] bg-gray-200 w-full h-full z-[1] justify-center" />
      </div>
      <div className="absolute top-[0px]w-[1478px] flex flex-row items-start justify-start max-w-full text-330xl-4">
        <b className="flex-1 relative inline-block text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.6)_52.5%,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-w-full z-[2] mq450:text-68xl mq925:text-121xl">
          $CHAMP
        </b>
        <b className="flex-1 relative inline-block [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff] max-w-full z-[3] ml-[-1478px] mq450:text-68xl mq925:text-121xl">
          $CHAMP
        </b>
      </div>
      <div className="absolute top-[458px]tracking-[1.14em] font-medium z-[2]">
        RELEASING
      </div>
      <div className="absolute top-[458px] tracking-[1.14em] font-medium z-[2]">
        JULY 17
      </div>
      <img
        className="absolute top-[229px] w-[1088px] h-[533px] object-cover z-[4]"
        loading="lazy"
        alt=""
        src="/untitled1-2@2x.png"
      />
    </section>
  );
};

export default FrameComponent3;
