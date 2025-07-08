import { useMenuControl } from "../../hooks/useMenuControl";

import { getTodayDate } from "../../utils/getTodayDate";

import FullMenu from "./icon-bars-menu/FullMenu";

import MenuButton from "./MenuButton";
import UserButton from "./UserButton";

export default function Header() {
  const { isMenuOpen, openMenu, closeMenu } = useMenuControl();

  return (
    <>
      {isMenuOpen && <FullMenu onClose={closeMenu} />}

      <header className="max-w-7xl mx-auto w-full border-b border-gray-300 bg-white z-50 shadow-sm">
        <nav
          className="relative flex items-center justify-between px-4 py-4"
          role="navigation"
          aria-label="Main navigation"
        >
          <MenuButton onClick={openMenu} />

          <h1 className="text-2xl sm:text-4xl absolute left-1/2 -translate-x-1/2 text-black text-center font-semibold font-serif whitespace-nowrap">
            One New World
          </h1>

          <UserButton />
        </nav>

        <section className="flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-4 bg-white border-t border-gray-300 text-center sm:text-left">
          <time className="text-xs sm:text-sm text-black">{getTodayDate()}</time>
          <button className="bg-white hover:bg-sky-200 text-black text-xs sm:text-sm font-medium px-4 py-2 border border-black rounded-md transition">
            Subscribe for $0.25/week
          </button>
        </section>
      </header>
    </>
  );
}