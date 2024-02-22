import React, { createContext, useContext, useState } from "react";

const defaultValues = {
  data: {},
  inputValue: "",
};

export const GithubSearchContext = createContext(defaultValues);

export const GithubSearchProvider = ({ children }) => {
  const [data, setData] = useState(defaultValues.data);
  const [inputValue, setInputValue] = useState(defaultValues.inputValue);

  return (
    <GithubSearchContext.Provider
      value={{ data, setData, inputValue, setInputValue }}
    >
      {children}
    </GithubSearchContext.Provider>
  );
};

export default function useGithubSearch() {
  return useContext(GithubSearchContext);
}
