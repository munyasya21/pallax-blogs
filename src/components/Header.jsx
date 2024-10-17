import Image from "next/image";
import logo from "/public/svg/new-logo.svg";
import darkLogo from "/public/svg/new-logo.svg";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Login from "./Login";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScolling, setIsScrolling] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const NavLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Why Pallax",
      link: "/about-us",
    },
    {
      name: "Portfolios",
      link: "/portfolio",
    },
    {
      name: "Smart home",
      link: "/smart-home",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];

  const { asPath, query } = useRouter();
  const router = useRouter();

  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    }
    window.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setCurrentPath(asPath);
    setIsMenuOpen(false);
  }, [router.asPath]);

  return (
    <main>
      {/* Desktop menu */}
      <div
        className={
          (isScolling ? "bg-opacity-80 bg-white backdrop-blur shadow" : "") +
          " w-full hidden lg:block border-b border-gray-300 fixed top-0 left-0 right-0 z-50 transition-all ease-in-out duration-100"
        }
      >
        <div className={"section !max-w-[1400px]  flex  py-5 justify-between items-center"}>
          {/* Left */}
          <div className="flex justify-between w-full items-center">
            {/* Logo */}
            <Link href="/">
              <Image alt="logo" src={!isHome && !isScolling ? darkLogo : logo} priority quality={50} />
            </Link>

            {/* Links */}
            <ul className="flex gap-9 items-center  justify-center whitespace-nowrap">
              {NavLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.link}
                    className={`${
                      currentPath === link.link || (link.name === "Portfolios" && query?.id)
                        ? "text-brand-500"
                        : "text-zinc-900 hover:text-brand-600"
                    }    text-base font-medium leading-normal `}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex gap-3 items-center">
              <button onClick={() => setOpen(true)} className="outline-btn">
                Log in
              </button>
              <Link href="/contact-us" className="primary-btn">
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={" relative w-full  "}>
        <div
          className={
            (isScolling && !isMenuOpen ? "bg-white backdrop-blur-sm bg-opacity-80 shadow-sm" : "bg-white  ") +
            " flex justify-between fixed  top-0 lg:hidden transition-all ease-in-out duration-150 right-0 left-0 py-4 items-center z-50 border-b border-gray-300  section"
          }
        >
          <Link href="/">
            <Image style={{ width: "130px" }} alt="logo" src={!isHome && !isScolling ? darkLogo : logo} priority />
          </Link>

          <div className="">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="pt-1">
              {!isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className={!isScolling && !isHome ? " w-6 h-6 text-gray-800" : " w-6 h-6 text-black"}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className={!isScolling && !isHome ? " w-6 h-6 text-gray-800" : " w-6 h-6 text-black"}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
            <div
              className={
                (isMenuOpen ? "translate-x-0" : "translate-x-full") +
                "  bg-white absolute shadow-lg transition-all ease-in-out duration-200  left-0  px-4 py-6 w-full"
              }
            >
              <ul className="flex flex-col !text-gray-800 gap-1 w-full items-left  whitespace-nowrap">
                {NavLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.link}
                      className={`${
                        currentPath === link.link || (link.name === "Portfolios" && query?.id)
                          ? "bg-brand-500 text-white"
                          : "bg-white "
                      }  text-base w-full block text-left px-3 rounded-md font-semibold py-2 leading-normal `}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                  <li className="w-full">
                    <button onClick={() => setOpen(true)} className="outline-btn w-full">
                      Log in
                    </button>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Login modal */}
      <Login open={open} closeModal={closeModal} />
    </main>
  );
};
export default Header;
