import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

const BASE_URL = "https://run.mocky.io/v3/592376c2-1f1d-47ef-b487-711bd84b802c";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((pizza) => {
        setData(pizza.menu);
        setFilteredData(pizza.menu);
      })
      .catch(() => {});
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setFilteredData(
      data.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  return (
    <div className="container">
      <Header onSearch={handleSearch} />
      <Home data={filteredData} />
    </div>
  );
};

export default App;
