/* eslint-disable @next/next/no-img-element */
import { CaretDown, SignOut } from "phosphor-react";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type PropsType = {
  username: string;
};

export default function Navbar(props: PropsType) {
  const { username } = props;
  const firstUsernameLetter = props.username[0].toUpperCase();
  const router = useRouter();
  const [showDropDown, setShowDropDown] = useState(false);

  const handleNavClick = (event: FormEvent, route: string): void => {
    event.preventDefault();
    router.push(route);
  };
  return (
    <nav className="fixed z-20 h-20 w-full flex items-center px-10 justify-between top-0 left-0">
      <div className="flex items-center gap-10">
        <div>
          <div className="flex h-20 items-center">
            <img src={"/img/logo.svg"} alt={""} className={"h-[45%]"} />
          </div>
        </div>
        <ul className="navbar-list list-none">
          <li onClick={(event) => handleNavClick(event, "/")}>Home</li>
          <li onClick={(event) => handleNavClick(event, "/browse/mylist")}>
            My List
          </li>
        </ul>
      </div>
      <div className="flex flex-col bg-red relative">
        <button
          className="flex gap-5 items-center hover:div-bg-red-600"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          <div className="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center">
            {firstUsernameLetter}
          </div>
          <p>{username}</p>
          <CaretDown />
        </button>
        {showDropDown && (
          <div className="cursor-pointer absolute top-10 right-0 bg-red-600 rounded py-1 px-2 hover:bg-red-700 transition-all">
            <Link href="/login" prefetch>
              <a className="flex items-center gap-2">
                <span>Sign out</span>
                <SignOut />
              </a>
            </Link>
          </div>
        )}
      </div>
      <div className="bg-opacity-50 bg-black gradient-mask-td absolute w-full top-0 left-0 h-full z-[-1]" />
    </nav>
  );
}
