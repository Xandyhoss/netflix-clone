import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
const sizes = ["large", "medium", "small"] as const;
type PropsType = {
  imgUrl?: string;
  size?: typeof sizes[number];
};

export default function Card(props: PropsType) {
  const {
    imgUrl = "https://images.wallpaperscraft.com/image/single/toyota_supra_green_front_view_102266_1920x1080.jpg",
    size = "medium",
  } = props;
  const classMap = {
    large: "w-[250px] h-[350px]",
    medium: "w-[180px] h-[280px]",
    small: "w-[230px] h-[150px]",
  };

  const imgErrorHandler = () => {
    console.log('Error on image, ID: ')
  };

  return (
    <div className={`${classMap[size]} relative cursor-pointer`}>
      <p className="z-[1]">card size: {size}</p>
      <Image
        src={imgUrl}
        alt="Image"
        layout="fill"
        className="object-cover z-[-1] object-center mx-auto my-auto block absolute"
        onError={imgErrorHandler}
      />
    </div>
  );
}
