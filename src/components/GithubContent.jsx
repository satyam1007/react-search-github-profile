import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { RiGitRepositoryFill } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { TbPackages } from "react-icons/tb";
import { IoStarSharp } from "react-icons/io5";
import useGithubSearch from "../context/GithubSearchContext";
import "bootstrap/dist/css/bootstrap.min.css";

function GithubContent() {
  const { data, setData, inputValue, setInputValue } = useGithubSearch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.length === 0) {
      alert("Please enter username");
      return;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      let url = `https://api.github.com/users/${inputValue}`;
      try {
        const response = await fetch(url);
        // console.log(response);
        if (!response.ok) {
          throw new Error("Request failed with status: " + response.status);
        }
        const userData = await response.json();
        setData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [inputValue]);

  return (
    <>
      <nav className="navbar navbar-expand-lg text-white">
        <div className="container-fluid">
          <a
            className="navbar-brand text-white"
            target="_blank"
            href="https://github.com"
          >
            <h2>
              <FaGithub />
            </h2>
          </a>
          <button
            style={{ background: "white" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex align-items-center ms-2">
                <h5>
                  <FaBookOpen />
                </h5>
                <a
                  className="nav-link active text-white"
                  target="_blank"
                  aria-current="page"
                  href={`https://github.com/${data.login}`}
                >
                  Overview
                </a>
              </li>
              <li className="nav-item d-flex align-items-center ms-2">
                <h5>
                  <RiGitRepositoryFill />
                </h5>
                <a
                  className="nav-link text-white"
                  target="_blank"
                  href={`https://github.com/${data.login}?tab=repositories`}
                >
                  Repositories
                </a>
              </li>
              <li className="nav-item d-flex align-items-center ms-2">
                <h5>
                  <GoProjectSymlink />
                </h5>
                <a
                  className="nav-link text-white"
                  target="_blank"
                  href={`https://github.com/${data.login}?tab=projects`}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item d-flex align-items-center ms-2">
                <h5>
                  <TbPackages />
                </h5>
                <a
                  className="nav-link text-white"
                  target="_blank"
                  href={`https://github.com/${data.login}?tab=packages`}
                >
                  Packages
                </a>
              </li>
              <li className="nav-item d-flex align-items-center ms-2">
                <h5>
                  <IoStarSharp />
                </h5>
                <a
                  className="nav-link text-white"
                  target="_blank"
                  href={`https://github.com/${data.login}?tab=stars`}
                >
                  Stars
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                value={inputValue}
                className="form-control me-2"
                type="search"
                placeholder="Search here..."
                aria-label="Search"
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <hr style={{ borderBottom: "1px solid white", marginTop: "0px" }} />

      <div className="container">
        <div className="row justify-content-center mt-2">
          <div className="col-md-12">
            <div
              className="border p-4 rounded"
              // style={{ paddingBottom: "500px" }}
            >
              <h1 id="heading" className="text-center text-light">
                Hi there 👋 , I am {data.name}
              </h1>
              <div style={{ marginBottom: "100px" }}>
                <div className="d-flex align-items-center gap-4 flex-wrap justify-content-center">
                  <img
                    src={data.avatar_url}
                    width={"150px"}
                    alt="userImage"
                    className="img-fluid mt-2 rounded-circle"
                  />
                  <div className="col-md-6">
                    <h3 id="userName" className="text-light">
                      {data.login}
                    </h3>
                    <a
                      href={`https://github.com/${data.login}`}
                      className="text-primary"
                      id="link"
                      target="_blank"
                    >
                      Visit profile
                    </a>
                  </div>
                  <h5 className="text-light" id="joiningDate">
                    Joined: {data.created_at}
                  </h5>
                  <div className="text-light">
                    <h5 id="bio">{data.bio}</h5>
                  </div>
                </div>
              </div>
              <div className="border p-4 rounded d-flex flex-wrap align-items-center justify-content-center justify-content-between">
                <div className="repo bg-primary text-light d-flex align-items-center px-2 rounded">
                  <h5 className="pt-1">Repo: {data.public_repos}</h5>
                </div>
                <div className="followers bg-primary text-light mt-2 d-flex align-items-center px-2 rounded">
                  <h5 className="pt-1">Followers: {data.followers}</h5>
                </div>
                <div className="following bg-primary text-light mt-2 d-flex align-items-center px-2 rounded">
                  <h5 className="pt-1">Following: {data.following}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GithubContent;
