import MenuHeader from "./MenuHeader";
import MenuSearchBar from "./MenuSearchBar";
import MenuItemList from "./MenuItemList";

export default function Menu({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      <MenuHeader onClose={onClose} />
      <MenuSearchBar />
      <MenuItemList />
    </div>
  );
}
