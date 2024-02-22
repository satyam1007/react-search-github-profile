import "./App.css";
import { GithubSearchProvider } from "./context/GithubSearchContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GithubContent from "./components/GithubContent";
import GithubParams from "./components/GithubParams";

function App() {
  return (
    <GithubSearchProvider>
      <GithubContent />
      <Router>
        <Routes>
          <Route path="/username/:user" element={<GithubParams />} />
        </Routes>
      </Router>
    </GithubSearchProvider>
  );
}

export default App;
