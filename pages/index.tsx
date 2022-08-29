import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
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
      <div className="w-full p-10 gap-y-10 flex flex-col">
        <Card
          imgUrl="https://images.wallpaperscraft.com/image/single/toyota_supra_green_front_view_102266_1920x1080.jpg"
          size="large"
        />
        <Card
          imgUrl="https://images.wallpaperscraft.com/image/single/toyota_supra_green_front_view_102266_1920x1080.jpg"
          size="medium"
        />
        <Card
          imgUrl="https://images.wallpaperscraft.com/image/single/toyota_supra_green_front_view_102266_1920x1080.jpg"
          size="small"
        />
      </div>
    </div>
  );
};

export default Home;
