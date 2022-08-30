import Card from "./Card";
import { CaretLeft, CaretRight } from "phosphor-react";
import { Video } from "../util/types";

type PropsType = {
  title: string;
  data: Video[];
  size?: "large" | "small" | "medium";
};

const handleSlide = (direction: "left" | "right", title: string) => {
  const slider = document.getElementById(title);
  if (slider !== null) {
    switch (direction) {
      case "left":
        slider.scrollLeft -= 500;
        break;
      case "right":
        slider.scrollLeft += 500;
        break;
    }
  }
};

export default function CardSection(props: PropsType) {
  const { title, data, size } = props;
  return (
    <section className="w-full px-10 py-5 gap-y-8 flex flex-col">
      <h2 className="text-4xl font-roboto">{title}</h2>
      <div className="flex relative items-center">
        <div className="absolute bg-black left-0 flex w-36 h-[95%] gradient-mask-lr opacity-30 hover:opacity-70 transition-all z-[39]">
          <CaretLeft
            size={70}
            className="absolute z-[40] left-0 self-center hover:scale-[1.2] transition-all"
            onClick={() => handleSlide("left", title)}
          />
        </div>
        <div
          className="flex gap-3 py-3 px-2 overflow-x-scroll hide-scroll-bar scroll-smooth w-auto"
          id={title}
        >
          {data.map((item, i) => {
            return (
              <Card
                imgUrl={item.snippet.thumbnails.high.url}
                size={size}
                key={item.id.videoId}
              />
            );
          })}
        </div>

        <div className="absolute bg-black right-0 flex w-36 h-[95%] gradient-mask-rl opacity-30 hover:opacity-70 transition-all z-[39]">
          <CaretRight
            size={70}
            className="absolute z-[40] right-0 self-center hover:scale-[1.2] transition-all"
            onClick={() => handleSlide("right", title)}
          />
        </div>
      </div>
    </section>
  );
}
