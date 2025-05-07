import Image from "next/image";
import Link from "next/link";

import instagram from "../../public/img/instagram-yellow.svg";
import vimeo from "../../public/img/vimeo-yellow.svg";
import logo from "../../public/img/logo-yellow.svg";

export default function Navbar() {
  return (
    <nav className="bg-transparent text-white flex justify-between w-full pr-10 pl-10 pt-5 pb-5 flex-no-wrap fixed top-0 z-40  items-center shadow-md shadow-black/5 ">
      <div>
        <Link href="/">
          <Image src={logo} alt="instagram" width={40} className="" />
        </Link>
      </div>

      <div className="hidden md:block">
        <ul className="flex gap-5 ">
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
      <div className="flex gap-3">
        <div>
          <Link
            href="https://www.instagram.com/all.mono/?hl=es-la"
            target="_blank"
          >
            <Image src={instagram} alt="instagram" width={40} />
          </Link>
        </div>

        <div>
          <Link href="https://vimeo.com/user171798796" target="_blank">
            <Image src={vimeo} alt="instagram" width={40} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
