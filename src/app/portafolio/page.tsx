import Footer from "@/components/Footer";
import Image from "next/image";
import bandsCover from "../../../public/img/imgProtfolio/bands/IMG_0545AE0BF82F-1.jpeg";
import documental from "../../../public/img/imgProtfolio/documental/IMG_1911.jpg";
import portrait from "../../../public/img/imgProtfolio/portrait/IMG_1912.jpg";
import others from "../../../public/img/imgProtfolio/others/IMG_1924.jpg";

export default function Portfolio() {
  return (
    <div>
      <div className="bg-black text-white h-screen">
        <div>
          <h1 className="pt-20 text-center text-2xl">PORTAFÓLIO</h1>
        </div>
        <div>
          <div className="">
            <Image alt="bands-Galery" src={bandsCover} className="w-screen" />
          </div>

          <div className="">
            <Image alt="bands-Galery" src={documental} className="w-screen" />
          </div>
          <div className="">
            <Image alt="bands-Galery" src={portrait} className="w-screen" />
          </div>
          <div className="">
            <Image alt="bands-Galery" src={others} className="w-screen" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
