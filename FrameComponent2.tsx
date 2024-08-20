import { FunctionComponent } from "react";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section id="section3"
      className={`self-stretch flex flex-row items-end justify-center py-[185px] px-[282px] box-border relative gap-9 max-w-full text-left text-13xl-1 text-white font-outfit mq925:gap-[18px] mq925:py-[78px] mq925:px-[70px] mq925:box-border mq1350:py-[120px] mq1350:px-[141px] mq1350:box-border mq1800:flex-wrap ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]" />
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-200 z-[1]" />
      </div>
      <div className="w-[615px] flex flex-col items-start justify-start py-0 pl-0 pr-[19px] box-border gap-[461px] max-w-full mq450:gap-[115px] mq925:gap-[230px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
          <div className="relative font-medium inline-block min-w-[127px] z-[2] mq450:text-lgi mq925:text-7xl">
          Part 2: Launch
          </div>
          <div className="self-stretch relative text-lgi-4 font-extralight text-darkgray z-[2]">
          The launch of $CHAMP, this will set a new era in the Solana space, bridging Sports and Crypto together for the first time. Our anticipated launch will be pushed out everywhere, on Jaylen Brown's official socials, and to our private investors.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
          <div className="relative font-medium inline-block min-w-[127px] z-[2] mq450:text-lgi mq925:text-7xl">
          Part 4: Bringing $CHAMP mainstream
          </div>
          <div className="self-stretch relative text-lgi-4 font-extralight text-darkgray z-[2]">
          Through our 10+ partnerships we have lined up with worldwide mainstream companies, and our networked team, we will push $CHAMP mainstream, and onboard millions of non-crypto users. Events, front-row seats, signed basketballs, exclusive meetups, and a lot of other [REDACTED] benefits. There's a lot we cannot share right now, but we're very excited to create something revolutionary in the Solana space.
          </div>
        </div>
      </div>
      <img
        className="h-[1026px] w-[54px] relative z-[2]"
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
      <div className="w-[595.6px] flex flex-col items-start justify-start pt-0 px-0 pb-[219px] box-border min-h-[1019px] max-w-full mq925:pb-[92px] mq925:box-border mq1350:pb-[142px] mq1350:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[496px] mq450:gap-[124px] mq925:gap-[248px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <div className="relative font-medium inline-block min-w-[127px] z-[2] mq450:text-lgi mq925:text-7xl">
            Part 1: Community Building
            </div>
            <div className="self-stretch relative text-lgi-4 font-extralight text-darkgray z-[2]">
            The beginning of $CHAMP, the forming of our new-found crypto champions. We have an amazing team of community builders, and all the $CHAMP socials created and prepared, ready for launch.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <div className="relative font-medium inline-block min-w-[127px] z-[2] mq450:text-lgi mq925:text-7xl">
            Part 3: Partnerships
            </div>
            <div className="self-stretch relative text-lgi-4 font-extralight text-darkgray z-[2]">
            $CHAMP will not be your typical short-lived coin. We have a lot of exciting partnerships with many massive companies, players, and teams that you all know of. We can't share exact details, but just view $CHAMP as a VIP ticket, a gateway, a coin you can use for the most exclusive perks and events.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
