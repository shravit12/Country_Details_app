import { useTheme } from "../Context/ThemeContext";

function Navbar() {
  const { dark, toggleDark } = useTheme();

  return (
    <nav
      className={
        dark
          ? "bg-gray-800 text-white shadow px-6 py-4 flex justify-between"
          : "bg-white text-black shadow px-6 py-4 flex justify-between"
      }
    >
      <h1 className="font-bold text-lg">
        Where in the world?
      </h1>

      <button onClick={toggleDark}>
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;