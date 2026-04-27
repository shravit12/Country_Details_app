import { useEffect, useState } from "react";
import { useTheme } from "../Context/ThemeContext";

import Navbar from "../components/Navbar";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import { getAllCountries } from "../services/api";

function Home() {
  const { dark } = useTheme();

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    getAllCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  const filtered = countries.filter((c) => {
    return (
      c.name.common.toLowerCase().includes(search.toLowerCase()) &&
      (region ? c.region === region : true)
    );
  });

  const pageStyle = dark
    ? "min-h-screen bg-gray-900 text-white"
    : "min-h-screen bg-gray-100 text-black";

  return (
    <div className={pageStyle}>
    

      <div className="p-6">
        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <SearchBar setSearch={setSearch} />
          <Filter setRegion={setRegion} />
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;