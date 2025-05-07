import Link from "next/link";

import Footer from "./Footer";

import Image from "next/image";
import portrait from "../../public/img/portraitcurve.png";
import vimeo1 from "../../public/img/vimeo1.png";
import vimeo2 from "../../public/img/vimeo2.png";

export default function Section1() {
  return (
    <main className="text-white w-full h-10 ">
      <div className=" z-10">
        <div className=" z-20">
          <Image src={portrait} alt="Retrato" />
        </div>
        <div className="text-black  z-30 pl-10 w-2xl  ">
          <div>
            <h1 className="text-5xl font-black">ALLMONO</h1>
          </div>
          <div>
            <h2 className=" uppercase font-bold">Fotógrafo y Videógrafo</h2>
          </div>
          <div>
            <p className="mt-3 w-80 md:w-90 ">
              Soy Fernando Forero fotógrafo y videógrafo profesional. Trabajo en
              fotografía documental, retrato y cobertura de eventos. Este
              espacio reúne una selección de proyectos y encargos. Disponible
              para colaboraciones y contrataciones.
            </p>
          </div>
          <div className="bg-amber-400 mt-3 mb-3 p-2 w-fit rounded">
            <Link href="/portafolio">PORTAFOLIO</Link>
          </div>
        </div>

        <div>
          <div className="w-full aspect-video">
            <Link href="https://vimeo.com/user171798796">
              <Image src={vimeo1} alt="vimeo" />
            </Link>
          </div>

          <div className="w-full aspect-video">
            <div className="w-full aspect-video">
              <Link href="https://vimeo.com/user171798796">
                <Image src={vimeo2} alt="vimeo" />
              </Link>
            </div>
          </div>
        </div>

        <div className="">
          <Footer />
        </div>
      </div>
    </main>
  );
}
