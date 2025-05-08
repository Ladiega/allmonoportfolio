import Footer from "./Footer";

import Image from "next/image";
import portrait from "../../public/img/portraitcurve.png";

import GridGalleryBands from "./GridGalleryBands";
import GridGalleryPortrait from "./GridGalleryPortrait";

export default function Section1() {
  return (
    <main className="text-white w-full h-10 ">
      <div className=" z-10">
        <div className=" z-20">
          <Image src={portrait} alt="Retrato" />
        </div>
        <div>
          <h1 className="text-black text-4xl text-center">FERNANDO FORERO</h1>
          <h3 className="text-black text-center mb-10">
            FOTÓGRAFO Y VIDEÓGRAFO
          </h3>
        </div>

        <GridGalleryBands />
        <GridGalleryPortrait />

        <div className="">
          <Footer />
        </div>
      </div>
    </main>
  );
}
