import { useTheme } from "../Context/ThemeContext";

function Filter({ setRegion }) {
  const { dark } = useTheme();

  return (
  <select
  onChange={(e) => setRegion(e.target.value)}
  className={` shadow rounded border outline-none px-10 text-sm ${
    dark ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"
  }`}
>
      <option value="" >Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

export default Filter;