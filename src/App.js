import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryCurrentPage from "./pages/CountryCurrentPage";
import VaccinationPage from "./pages/VaccinationPage";
import CountryHistoryPage from "./pages/CountryHistoryPage";
import SearchPage from "./pages/SearchPage";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {

  const [searchValue, setSearchValue] = useState("");

  const handleSearchValue = (value) => {
    setSearchValue(value);
  };

  return (
    <Router>
      <Header />
      <Search searchValue={handleSearchValue} />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/country">
          <CountryCurrentPage />
        </Route>
        <Route path="/vaccine">
          <VaccinationPage />
        </Route>
        <Route path="/country-history">
          <CountryHistoryPage />
        </Route>
        <Route path="/search">
          <SearchPage searchValue={searchValue} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
