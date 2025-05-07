import Link from "next/link";

import Footer from "./Footer";

import Image from "next/image";
import portrait from "../../public/img/portraitcurve.png";

export default function Section1() {
  return (
    <main className="text-white w-full h-10 ">
      <div className=" z-10">
        <div className=" z-20">
          <Image src={portrait} alt="Retrato" />
        </div>
        <div className="text-black  z-30 pl-10 w-2xl ">
          <h1 className="text-5xl font-black">ALLMONO</h1>
          <h2 className=" uppercase font-bold">Fotógrafo y Videógrafo</h2>
          <p className="mt-3">
            Soy Fernando Forero fotógrafo y videógrafo profesional. Trabajo en
            fotografía documental, retrato y cobertura de eventos. Este espacio
            reúne una selección de proyectos y encargos. Disponible para
            colaboraciones y contrataciones.
          </p>
          <div className="bg-amber-400 mt-3 mb-3 p-2 w-fit rounded">
            <Link href="/portafolio">PORTAFOLIO</Link>
          </div>
        </div>

        <div className="w-full aspect-video">
          <iframe
            src="https://vimeo.com/user171798796"
            className="w-full aspect-video"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Video de Vimeo"
          ></iframe>
        </div>

        <div className="w-full aspect-video">
          <iframe
            src="https://vimeo.com/user171798796"
            className="w-full aspect-video"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Video de Vimeo"
          ></iframe>
        </div>

        <div className="">
          <Footer />
        </div>
      </div>
    </main>
  );
}
