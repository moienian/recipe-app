import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./App.scss";

const App = () => {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const APP_ID = "39d67c21";
  const APP_KEY = "125253941fe83e450d0235c73bb01292";

  const reqApi = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = async () => {
    const response = await fetch(reqApi);
    const data = await response.json();
    setRecipe(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          placeholder="Type keyword here"
          onChange={updateSearch}
          value={search}
        />
        <button className="search-btn">Submit</button>
      </form>
      <div className="recipe-group">
        {recipe.map((item) => {
          return (
            <div>
              <Recipe label={item.recipe.label} image={item.recipe.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
