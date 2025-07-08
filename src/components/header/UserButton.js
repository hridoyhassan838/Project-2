import DynamicFontAwesomeIcon from "../../lib/fontawesome/DynamicIcons";

export default function UserButton() {
  return (
    <a
      href="#"
      aria-label="Go to User Account"
      className="text-base sm:text-3xl text-black hover:text-gray-600 transition-colors duration-200"
    >
      <DynamicFontAwesomeIcon icon="user" title="User Account" />
    </a>
  );
}