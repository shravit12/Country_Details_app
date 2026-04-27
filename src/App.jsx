import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        
        {/* Navbar sab pages me dikhega */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountryDetails />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;