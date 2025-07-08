export default function SearchBar() {
  return (
    <div className="p-4">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="SEARCH"
          className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
        />
        <button className="bg-gray-200 px-4 rounded text-sm font-semibold">
          GO
        </button>
      </div>
    </div>
  );
}
