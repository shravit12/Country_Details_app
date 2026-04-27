import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

// Create axios instance (clean + scalable)
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});


// 🌍 Get all countries
export const getAllCountries = async () => {
  try {
    const res = await api.get(
      "/all?fields=name,flags,population,region,capital,cca3"
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching all countries:", error);
    throw error;
  }
};


// 🔍 Search by country name
export const searchCountry = async (name) => {
  try {
    const res = await api.get(
      `/name/${name}?fields=name,flags,population,region,capital,subregion,cca3,languages,currencies,tld,borders`
    );
    return res.data;
  } catch (error) {
    console.error("Error searching country:", error);
    throw error;
  }
};


// 🌎 Filter by region
export const filterByRegion = async (region) => {
  try {
    const res = await api.get(
      `/region/${region}?fields=name,flags,population,region,capital,cca3`
    );
    return res.data;
  } catch (error) {
    console.error("Error filtering region:", error);
    throw error;
  }
};


// 🏳️ Get single country by code (for borders)
export const getCountryByCode = async (code) => {
  try {
    const res = await api.get(`/alpha/${code}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching country by code:", error);
    throw error;
  }
};