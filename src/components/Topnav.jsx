import { useState } from "react";
import Container from "./Container";
import { links } from "../constants/topnav-links";
import { logoIcon } from "../assets";

const Topnav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="topnav" className="sticky top-0 bg-slate-100 py-1">
      <Container>
        <div className="grid grid-cols-2">
          <div className="flex justify-start items-center">
            <a href="/">
              <img src={logoIcon} alt="Icons Logo Labi" className="w-12 h-12" />
            </a>
          </div>
          <div className="hidden lg:flex justify-between items-center">
            {links.map((link) => {
              return (
                <a key={link.id} href={link.href} className="font-sans">
                  {link.linkName}
                </a>
              );
            })}
          </div>
          <div className="flex justify-end items-center lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={
            isOpen
              ? "bg-slate-100 fixed w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden flex justify-center items-center flex-col"
              : "hidden"
          }
        >
          <button onClick={() => setIsOpen(!isOpen)} className="absolute top-3 right-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {links.map((link) => {
            return (
              <a
                key={link.id}
                href={link.href}
                className="font-sans mb-3"
                onClick={() => setIsOpen(!isOpen)}
              >
                {link.linkName}
              </a>
            );
          })}
          <p className="absolute text-xs text-slate-500 bottom-3">&copy; alright reserved by Labi.id</p>
        </div>
      </Container>
    </div>
  );
};

export default Topnav;
