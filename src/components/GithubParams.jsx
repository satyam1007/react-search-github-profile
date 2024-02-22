import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGithubSearch from "../context/GithubSearchContext";

function GithubParams() {
  const { setInputValue } = useGithubSearch();
  const { user } = useParams();

  useEffect(() => {
    setInputValue(user);
  }, [user]);

  return;
}

export default GithubParams;
