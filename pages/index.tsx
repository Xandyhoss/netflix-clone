import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import CardSection from "../components/CardSection";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  const data: {
    id: number;
    imgUrl?: string;
    size?: "large" | "small" | "medium";
  }[] = [];

  for (var i = 0; i <= 8; i++) {
    data.push({
      id: i,
      imgUrl:
        "/img/card-img.jpg",
      size: "large",
    });
  }

  const data2: {
    id: number;
    imgUrl?: string;
    size?: "large" | "small" | "medium";
  }[] = [];

  for (var i = 0; i <= 8; i++) {
    data2.push({
      id: i,
      imgUrl:
        "https://images.wallpaperscraft.com/image/single/toyota_supra_green_front_view_102266_1920x1080.jpg",
      size: "medium",
    });
  }

  const data3: {
    id: number;
    imgUrl?: string;
    size?: "large" | "small" | "medium";
  }[] = [];

  for (var i = 0; i <= 8; i++) {
    data3.push({
      id: i,
      imgUrl:
        "/img/card-img.jpg",
      size: "small",
    });
  }

  return (
    <div className="h-screen">
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar username="carolina@gmail.com" />
      <Banner
        title="Is that a supra?"
        subTitle="Yo, is that a supra?
        "
        imgUrl="https://images.wallpaperscraft.com/image/single/toyota_supra_green_front_view_102266_1920x1080.jpg"
      />
      <CardSection title="Large section" data={data} size="large" />
      <CardSection title="Medium section" data={data2} size="medium"/>
      <CardSection title="Small section" data={data3} size="small"/>
    </div>
  );
};

export default Home;
