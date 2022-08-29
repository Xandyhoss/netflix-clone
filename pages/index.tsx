import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const data: { id: number; imgUrl?: string }[] = [];

for (var i = 0; i <= 9; i++) {
  if (i % 2 == 0) {
    data.push({
      id: i,
      imgUrl:
        "https://images.wallpaperscraft.com/image/single/toyota_supra_green_front_view_102266_1920x1080.jpg",
    });
  } else {
    data.push({
      id: i,
    });
  }
}

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
        <div className="flex gap-5">
          {data.map((item, i) => {
            return <Card imgUrl={item.imgUrl} key={i} />;
          })}
        </div>
        <div className="flex gap-5">
          {data.map((item, i) => {
            return <Card imgUrl={item.imgUrl} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
