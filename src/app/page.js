import Image from "next/image";
import homeImg from "../../public/main.jpg";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div >
      <div className="w-full h-0">
        <Image
          src={homeImg}
          alt="restaurant booking"
          layout="fill"
          className="bg-cover bg-center object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
        <Navbar/>
        <main>
          <HeroSection />
        </main>
      </div>
    </div>
  );
}
