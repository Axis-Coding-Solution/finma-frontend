// import all constant value such as debounce value, icons sizes, other variables that are being used throughout the app.
import countriesList from "./countries";
export { object, string, number, boolean, array, ref, mixed, date } from "yup";
export { yupResolver } from "@hookform/resolvers/yup";
export const FORM_MODE = "onChange";

const countriesOptions = countriesList.map((country) => ({
  value: country.name.toLowerCase().replaceAll(" ", "_"),
  label: country.name,
}));

export { countriesList, countriesOptions };
