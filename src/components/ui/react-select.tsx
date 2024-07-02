import Select, { Props, StylesConfig } from "react-select";
import { CSSObject } from "@emotion/react"; 


const customStyles: StylesConfig = {
  control: (provided: CSSObject, state: any) => ({
    ...provided,
    borderColor: state.isFocused ? '#f66a6a' : '#E0E0E0',
    boxShadow: state.isFocused ? 'none' : 'none',
    borderRadius:'16px',
    height:'45px',
    padding:'0px 12px',
    fontSize:'14px',
    '&:hover': {
      borderColor: state.isFocused ? 'f66a6a' : '#E0E0E0',

    },
  }),
  option: (provided: CSSObject, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#B1EF95" : state.isFocused ? "lightgray" : "white",
    color: state.isSelected ? "black" : "black",
    '&:hover': {
      backgroundColor: "lightgray",
      color: "black",
    }
  }),
  singleValue: (provided: CSSObject, state: any) => ({
    ...provided,
    color: "black",
  }),
  menu: (provided: CSSObject, state: any) => ({
    ...provided,
    backgroundColor: "white",
    borderColor:"red",
    zIndex: 9999,
  }),
  menuList: (provided: CSSObject, state: any) => ({
    ...provided,
    maxHeight: "200px",
    overflowY: "auto",
  }),
  placeholder: (provided: CSSObject, state: any) => ({
    ...provided,
    color: "gray",
  }),
};

export const ReactSelect = (props: Props) => {  
  return <Select {...props}  styles={customStyles}/>;
};
