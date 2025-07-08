import ChevronDownIcon from "../../icons/ChevronDownIcon";

const mainMenu = [
  { title: "Home" },
  { title: "U.S." },
  { title: "World" },
  { title: "Business" },
  { title: "Arts" },
  { title: "Lifestyle" },
  { title: "Opinion" },
];

const secondaryMenu = [
  { title: "Audio" },
  { title: "Games" },
  { title: "Cooking" },
  { title: "Wirecutter" },
  { title: "The Athletic" },
];

// 🟩 যেসব title-এ মোটা বর্ডার লাগবে
const thickBorderItems = ["Opinion", "The Athletic"];

// 🟨 যেসব title-এ dropdown আইকন থাকবে
const dropdownItems = [
  "U.S.",
  "World",
  "Business",
  "Arts",
  "Lifestyle",
  "Opinion",
  "Audio",
  "Games",
  "Cooking",
  "Wirecutter",
  "The Athletic",
];

// ✅ Reusable component
function MenuItem({ title }) {
  return (
    <li className="hover:bg-gray-50">
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-lg font-medium">{title}</span>
        {dropdownItems.includes(title) && <ChevronDownIcon size={18} />}
      </div>
      <div
        className={`mx-4 ${
          thickBorderItems.includes(title)
            ? "border-b-2 border-gray-400"
            : "border-b border-gray-200"
        }`}
      ></div>
    </li>
  );
}

export default function MenuItemList() {
  return (
    <div>
      {/* প্রথম মেনু */}
      <ul>
        {mainMenu.map((item, index) => (
          <MenuItem key={`main-${item.title}`} title={item.title} />
        ))}
      </ul>

      {/* দ্বিতীয় মেনু */}
      <ul>
        {secondaryMenu.map((item, index) => (
          <MenuItem key={`second-${item.title}`} title={item.title} />
        ))}
      </ul>

      {/* এডিশন / ভাষা */}
      <ul className="px-4 pt-4 space-y-2 mb-8">
        <li className="text-base font-semibold text-black">U.S.</li>
        <li className="text-sm text-gray-700 tracking-wide">INTERNATIONAL</li>
        <li className="text-sm text-gray-700 tracking-wide">CANADA</li>
        <li className="text-sm text-gray-700 tracking-wide">ESPAÑOL</li>
        <li className="text-sm text-gray-700 tracking-wide">中文</li>
      </ul>
    </div>
  );
}