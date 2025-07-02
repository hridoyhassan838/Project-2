import dynamic from "next/dynamic";

const DynamicFontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then((mod) => mod.FontAwesomeIcon),
  { ssr: false }
);

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto w-full border-b border-gray-300 bg-gray-100 z-50 shadow-sm">
      <nav
        className="relative flex items-center justify-between px-4 py-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <a
          href="#"
          aria-label="Open Main Menu"
          className="text-base sm:text-3xl text-black hover:text-gray-600 transition-colors duration-200"
        >
          <DynamicFontAwesomeIcon icon="bars" />
        </a>
        <h1 className="text-2xl sm:text-4xl absolute left-1/2 -translate-x-1/2 text-black text-center font-semibold font-serif whitespace-nowrap">
          One New World
        </h1>
        <a
          href="#"
          aria-label="Go to User Account"
          className="text-base sm:text-3xl text-black hover:text-gray-600 transition-colors duration-200"
        >
          <DynamicFontAwesomeIcon icon="user" />
        </a>
      </nav>

      <section className="flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-2 bg-gray-100 border-t border-gray-300 text-center sm:text-left">
        <time className="text-xs sm:text-sm text-black">
          Saturday, May 31, 2025
        </time>
        <button className="bg-gray-100 hover:bg-sky-200 text-black text-xs sm:text-sm font-medium px-4 py-2 border border-black rounded-md transition">
          Subscribe for $0.25/week
        </button>
      </section>
    </header>
  );
}