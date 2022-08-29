import Image from "next/image";
import { motion } from "framer-motion";

/* eslint-disable @next/next/no-img-element */
const sizes = ["large", "medium", "small"] as const;
type PropsType = {
  imgUrl?: string;
  size?: typeof sizes[number];
};

export default function Card(props: PropsType) {
  const { imgUrl = "/img/card-img.jpg", size = "medium" } = props;
  const classMap = {
    large: "w-[250px] h-[350px]",
    medium: "w-[180px] h-[280px]",
    small: "w-[230px] h-[150px]",
  };

  const imgErrorHandler = () => {
    console.log("Error on image, ID: ");
  };
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`${classMap[size]} relative cursor-pointer overflow-hidden rounded-md z-[1] hover:z-20 hover:drop-shadow-md`}
    >
      <Image
        src={imgUrl}
        alt="Image"
        layout="fill"
        className="object-cover z-[-1] object-center mx-auto my-auto block absolute"
        onError={imgErrorHandler}
      />
    </motion.div>
  );
}
