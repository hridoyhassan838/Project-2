import DynamicFontAwesomeIcon from "../../lib/fontawesome/DynamicIcons";

export default function MenuButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Open Main Menu"
      className="text-base sm:text-3xl text-black hover:text-gray-600 transition-colors duration-200"
    >
      <DynamicFontAwesomeIcon icon="bars" title="Menu" />
    </button>
  );
}