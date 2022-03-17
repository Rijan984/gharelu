import React, { useState } from "react";
import FooterProp from "../footer/FooterProp";
import List from "../list/List";
import "./search.css";
function Search() {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  return (
    <div>
      <div className="searchProperty">
        <div className="text">
          <h1>Find a property</h1>
          <p>Display your properties by category,city or area</p>
        </div>
        <div className="searchField">
          <div className="fields1">
            <input
              type="text"
              style={{ height: "40px", width: "100%" }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter an address, state, city, area or zip code"
              className="input"
            />
          </div>
          <div className="fields2">
            <select
              name="category"
              id="cate"
              placeholder="Choose"
              className="select"
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled hidden>
                Catergory
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="fields3">
            <input
              type="text"
              style={{ height: "40px", width: "100%" }}
              placeholder="Mini Price"
              className="input"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          {/* <div className="searchButton">
            <button className="button">
              <i className="bi bi-search" style={{ marginRight: "5px" }}></i>
              Search Property
            </button>
          </div> */}
        </div>
      </div>
      <List search={search} minPrice={minPrice} />
      <FooterProp />
    </div>
  );
}

export default Search;
