import { Play } from "phosphor-react";

/* eslint-disable @next/next/no-img-element */
type PropsType = {
  title: string;
  subTitle: string;
  imgUrl: string;
};
export default function Banner(props: PropsType) {
  const { title, subTitle, imgUrl } = props;
  const handleClick = (): void => {
    console.log("Play");
  };
  return (
    <div
      className="flex w-full h-[50%] mini:h-[70%] sm:h-[90%] relative bg-center bg-cover"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="z-[10] font-roboto p-10 h-min max-w-[50%] self-center">
        <div className="">
          <p className="flex items-center">
            <span className="text-red-600 text-3xl mr-1">N</span>{" "}
            <span>S E R I E S</span>
          </p>
        </div>
        <h2 className="text-[2.8rem] mini:text-6xl sm:text-7xl mb-1">
          <span>{title}</span>
        </h2>
        <h6 className="text-xl">{subTitle}</h6>
        <button
          onClick={() => handleClick()}
          className="bg-red-600 py-1 px-3 w-40 rounded mt-4 hover:bg-red-700 transition-all flex items-center justify-center"
        >
          <Play size={16} className="mr-1"/>
          <span>Play</span>
        </button>
      </div>
      {/* <img
        src={imgUrl}
        alt="Banner image"
        className="absolute h-auto justify-self-center w-[100%] z-[0] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
      /> */}
      <div className="w-full h-full top-0 left-0 bg-black absolute gradient-mask-lr opacity-75"></div>
    </div>
  );
}
