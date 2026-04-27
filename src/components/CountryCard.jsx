import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

function CountryCard({ country }) {
  const { dark } = useTheme();

  return (
    <Link to={`/country/${country.name.common}`}>
      <div
        className={
          dark
            ? "bg-gray-700 text-white rounded shadow overflow-hidden hover:scale-105 transition"
            : "bg-white text-black rounded shadow overflow-hidden hover:scale-105 transition"
        }
      >
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="w-full h-40 object-cover"
        />

        <div className="p-4">
          <h2 className="font-bold text-lg mb-2">
            {country.name.common}
          </h2>

          <p><strong>Population:</strong> {country.population}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Capital:</strong> {country.capital?.[0]}</p>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;