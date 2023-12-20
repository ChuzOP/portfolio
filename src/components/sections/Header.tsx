import React, { useState, useEffect } from "react";
import Menu from "../../icons/Menu";
import Close from "../../icons/Close";

const Header = () => {
  const [active, setActive] = useState(false);
  const closeMenu = () => {
    setActive(false);
  };

  useEffect(() => {
    let lastScrollTop: any;
    const navbar: any = document.getElementById("navbar");
    window.addEventListener("scroll", function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.style.top = "-144px";
      } else {
        navbar.style.top = "0";
      }
      lastScrollTop = scrollTop;
    });
  }, []);
  return (
    <div
      className="overflow-hidden fixed top-0 w-full z-10 duration-300"
      id="navbar"
    >
      <div
        className={`sticky top-0 py-3 w-full hidden items-center justify-center gap-2 lg:flex `}
      >
        <div className="flex gap-2 justify-center bg-opacity-80 backdrop-blur-lg px-2 rounded-md">
          <a
            className="px-2 py-4 font-semibold transition hover:text-primary"
            href="#aboutme"
          >
            Inicio
          </a>
          <a
            className="px-2 py-4 font-semibold transition hover:text-primary"
            href="#experience"
          >
            Experiencia
          </a>
          <a
            className="px-2 py-4 font-semibold transition hover:text-primary"
            href="#projects"
          >
            Proyectos
          </a>
          <a
            className="px-2 py-4 font-semibold transition hover:text-primary"
            href="#contact"
          >
            Contacto
          </a>
        </div>
      </div>
      <div className="sticky top-0 w-full flex items-center justify-end lg:hidden p-4">
        <Menu className={"cursor-pointer"} onClick={() => setActive(true)} />
      </div>
      <div
        className={`lg:hidden fixed top-0 left-0 min-h-screen min-w-full transition-all ${
          active ? "translate-x-0" : "translate-x-full "
        } bg-opacity-80 backdrop-blur-lg`}
      >
        <div className="flex justify-end pr-5 p-3">
          <Close
            className="fill-white w-7 cursor-pointer"
            onClick={closeMenu}
          />
        </div>
        <div className="flex gap-6 p-8 flex-col">
          <a
            className="px-2 py-4 font-semibold transition hover:text-primary"
            href="#aboutme"
            onClick={closeMenu}
          >
            Inicio
          </a>
          <a
            className="px-2 py-4 font-semibold transition hover:text-primary"
            href="#experience"
            onClick={closeMenu}
          >
            Experiencia
          </a>
          <a
            className="px-2 py-4 font-semibold transition hover:text-primary"
            href="#projects"
            onClick={closeMenu}
          >
            Proyectos
          </a>
          <a
            className="px-2 py-4 font-semibold transition hover:text-primary"
            href="#contact"
            onClick={closeMenu}
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
