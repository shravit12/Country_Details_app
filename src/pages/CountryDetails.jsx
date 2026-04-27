import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../Context/ThemeContext";
import { searchCountry } from "../services/api";

function CountryDetails() {
  const { name } = useParams();
  const { dark } = useTheme();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    searchCountry(name)
      .then((res) => {
        if (res && res.length > 0) {
          setCountry(res[0]);
        } else {
          setCountry(null);
        }
      })
      .catch((err) => {
        console.log(err);
        setCountry(null);
      });
  }, [name]);

  if (!country) return <p className="p-6">Loading...</p>;

  const pageStyle = dark
    ? "p-6 min-h-screen bg-gray-900 text-white"
    : "p-6 min-h-screen bg-white text-black";

  const buttonStyle = dark
    ? "mb-6 inline-block shadow px-4 py-2 bg-gray-700 text-white"
    : "mb-6 inline-block shadow px-4 py-2 bg-white text-black";

  return (
    <div className={pageStyle}>
      <Link to="/" className={buttonStyle}>
        ← Back
      </Link>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Flag */}
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="w-full"
        />

        {/* Details */}
     <div>
  <h1 className="text-3xl font-bold mb-6">
    {country.name.common}
  </h1>

  {/* 👇 YAHI CHANGE HAI */}
  <div className="grid md:grid-cols-2 gap-10">

    {/* LEFT SIDE */}
    <div className="space-y-2">
      <p>
        <strong>Native Name:</strong>{" "}
        {Object.values(country.name.nativeName || {})[0]?.common}
      </p>

      <p><strong>Population:</strong> {country.population}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Sub Region:</strong> {country.subregion}</p>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
    </div>

    {/* RIGHT SIDE */}
    <div className="space-y-2">
      <p>
        <strong>Top Level Domain:</strong>{" "}
        {country.tld?.join(", ")}
      </p>

      <p>
        <strong>Currencies:</strong>{" "}
        {Object.values(country.currencies || {})
          .map((cur) => cur.name)
          .join(", ")}
      </p>

      <p>
        <strong>Languages:</strong>{" "}
        {Object.values(country.languages || {}).join(", ")}
      </p>
    </div>

  </div>

  {/* BORDER COUNTRIES */}
  <div className="mt-6">
    <strong>Border Countries:</strong>

    <div className="flex flex-wrap gap-2 mt-2">
      {country.borders?.length > 0 ? (
        country.borders.map((border) => (
         <span
  key={border}
  className={`px-3 py-1 rounded ${
    dark ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
  }`}
>
  {border}
</span>
        ))
      ) : (
        <span>No Borders</span>
      )}
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default CountryDetails;