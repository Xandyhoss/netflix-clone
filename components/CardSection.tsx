import Card from "./Card";
import { CaretLeft, CaretRight } from "phosphor-react";

type PropsType = {
  title: string;
  data: {
    id: number;
    imgUrl?: string;
  }[];
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
    <section className="relative w-full px-10 py-5 gap-y-8 flex flex-col">
      <h2 className="text-4xl font-roboto">{title}</h2>
      <div className="flex">
        <CaretLeft
          size={70}
          className="self-center hover:scale-[1.2] transition-all"
          onClick={() => handleSlide("left", title)}
        />
        <div
          className="flex gap-3 py-3 px-2 overflow-x-scroll hide-scroll-bar scroll-smooth"
          id={title}
        >
          {data.map((item, i) => {
            return <Card imgUrl={item.imgUrl} size={size} key={item.id} />;
          })}
        </div>
        <CaretRight
          size={70}
          className="self-center hover:scale-[1.2] transition-all"
          onClick={() => handleSlide("right", title)}
        />
      </div>
    </section>
  );
}
