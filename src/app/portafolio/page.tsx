import Link from "next/link";

import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <div>
      <div className="bg-black text-white h-screen">
        <div>
          <h1 className="pt-20 text-center text-2xl">PORTAFÓLIO</h1>
        </div>
        <div className="text-black  z-30 pl-10 w-2xl  ">
          <div>
            <h1 className="text-5xl font-black text-white">ALLMONO</h1>
          </div>
          <div>
            <h2 className=" uppercase font-bold">Fotógrafo y Videógrafo</h2>
          </div>
          <div>
            <p className="mt-3 w-80 md:w-90 text-white">
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
      </div>
      <Footer />
    </div>
  );
}
