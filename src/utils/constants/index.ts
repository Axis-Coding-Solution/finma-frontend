// import all constant value such as debounce value, icons sizes, other variables that are being used throughout the app.
import countriesList from "./countries";
export { object, string, number, boolean, array, ref } from "yup";
export { yupResolver } from "@hookform/resolvers/yup";

const countriesOptions = countriesList.map((country) => ({
  value: country.code.toLowerCase(),
  label: country.name,
}));

export { countriesList, countriesOptions };
