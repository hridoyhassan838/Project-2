import CloseIcon from "../../icons/CloseIcon";

export default function MenuHeader({ onClose }) {
  return (
    <div className="flex items-center justify-between p-4">
      <button className="text-2xl" onClick={onClose}>
        <CloseIcon className="w-6 h-6" />
      </button>
    </div>
  );
}