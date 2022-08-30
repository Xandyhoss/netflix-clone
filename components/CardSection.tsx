import Card from "./Card";
import $ from "jquery";

type PropsType = {
  title: string;
  data: {
    id: number;
    imgUrl?: string;
  }[];
  size?: "large" | "small" | "medium";
};

export default function CardSection(props: PropsType) {
  const { title, data, size } = props;
  return (
    <section className="relative w-full px-10 py-5 gap-y-8 flex flex-col">
      <h2 className="text-4xl font-roboto">{title}</h2>
      <div className="flex gap-3 py-3 px-2 overflow-x-scroll hide-scroll-bar cardSection">
        {data.map((item, i) => {
          return <Card imgUrl={item.imgUrl} size={size} key={i} />;
        })}
      </div>
    </section>
  );
}
