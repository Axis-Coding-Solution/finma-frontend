// import all constant value such as debounce value, icons sizes, other variables that are being used throughout the app.
import countriesList from "./countries";

const countriesOptions = countriesList.map((country) => ({
  value: country.code.toLowerCase(),
  label: country.name,
}));

export { countriesList, countriesOptions };
