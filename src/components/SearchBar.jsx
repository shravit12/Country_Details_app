import { useTheme } from "../Context/ThemeContext";

function SearchBar({ setSearch }) {
  const { dark } = useTheme();

  return (
    <input
      type="text"
      placeholder="Search country..."
      onChange={(e) => setSearch(e.target.value)}
      className={
        dark
          ? "p-3 w-full md:w-1/3 shadow rounded bg-gray-700 text-white placeholder-gray-300"
          : "p-3 w-full md:w-1/3 shadow rounded bg-white text-black placeholder-gray-500"
      }
    />
  );
}

export default SearchBar;