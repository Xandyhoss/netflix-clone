import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import CardSection from "../components/CardSection";
import Navbar from "../components/Navbar";
import { getVideos } from "../util/data";
import { Video } from "../util/types";

const Home: NextPage = () => {
  const videos = getVideos();

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
      <CardSection title="Large section" data={videos as Video[]} size="large" />
    </div>
  );
};

export default Home;
