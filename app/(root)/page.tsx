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
        {/* <div className="flex row" style={{width: "100vw", height: "12px"}}>
          <div style={{width: "25vw", height: "100%", backgroundColor: "#C3E885"}}></div>
          <div style={{width: "25vw", height: "100%", backgroundColor: "#FFD6E1"}}></div>
          <div style={{width: "25vw", height: "100%", backgroundColor: "#F6E4B1"}}></div>
          <div style={{width: "25vw", height: "100%", backgroundColor: "#FFD0A2"}}></div>
        </div> */}
        {/* <Section1/> */}
        {/* <StoryAwaits/> */}
        {/* <Letters/>
        <Carousel />
        <LayoutGrid1 /> */}
      </div>
    </main>
  );
}