import React, { useEffect } from "react";
import axios from "axios";

const getData = async (searchValue) => {
  const firstLetter  = searchValue[0].toUpperCase();
  const restOfLetters = searchValue.slice(1);
  const result = await axios.get(
    `https://covid-api.mmediagroup.fr/v1/cases?country=${firstLetter}${restOfLetters}`
  );
  console.log(result.data);
};

const SearchPage = (props) => {
  useEffect(() => {
    getData(props.searchValue);
  }, [props.searchValue]);
  return <div>you have searched {props.searchValue}</div>;
};

export default SearchPage;
