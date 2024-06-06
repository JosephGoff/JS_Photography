import Hero from "@/components/home/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Carousel from "@/components/home/Carousel/Carousel";
import LayoutGrid1 from "@/components/home/LayoutGrid1/LayoutGrid1";
import Letters from "@/components/home/Letters/Letters";
import Section1 from "@/components/home/Section1";
import StoryAwaits from "@/components/home/StoryAwaits";

export default function Home() {
  const cards = [
    {
      id: 1, content: <p>This is the content of card 8</p>, className: "bg-green-500", thumbnail: "/assets/img1.jpg"
    },
        {
      id: 2, content: <p>This is the content of card 8</p>, className: "bg-green-500", thumbnail: "/assets/img2.jpg"
    },
        {
      id: 3, content: <p>This is the content of card 8</p>, className: "bg-green-500", thumbnail: "/assets/img1.jpg"
    },
        {
      id: 4, content: <p>This is the content of card 8</p>, className: "bg-green-500", thumbnail: "/assets/img2.jpg"
    },
  ]

  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <Section1/>
        {/* <StoryAwaits/> */}
        <Letters/>
        <Carousel />
        <LayoutGrid1 />
      </div>
    </main>
  );
}