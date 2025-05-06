import Image from "next/image";
import Link from "next/link";

import instagram from "../../public/img/instagram-white.svg";
import vimeo from "../../public/img/vimeo-white.svg";
import logo from "../../public/img/Mono.svg";

export default function Footer() {
  return (
    <footer className="bg-amber-400 flex justify-between items-center p-10 ">
      <div>
        <Image
          src={logo}
          alt="instagram"
          width={40}
          className="scale-x-[-1] "
        />
      </div>

      <div className="flex gap-3">
        <div>
          <Image src={instagram} alt="instagram" width={40} />
        </div>

        <div>
          <Image src={vimeo} alt="instagram" width={40} />
        </div>
      </div>
      <div className="hidden md:block">
        <ul className="flex  flex-col  font-light">
          <li>
            <Link href="/">PORTAFOLIO</Link>
          </li>
          <li>
            <Link href="/">SOBRE MI</Link>
          </li>
          <li>
            <Link href="/">CONTACTO</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
