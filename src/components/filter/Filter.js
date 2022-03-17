import React, { useEffect, useState } from "react";
import Dashboard from "../dashboard/Dashboard";
import "./filter.css";
function Filter() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [cate, setCate] = useState("");

  return (
    <div className="main">
      <div className="filter">
        <div className="inner">
          <h4>Search By Keywords</h4>
          <div className="form">
            <i class="bi bi-search"></i>
            <input
              type="search"
              placeholder="Job title, Keywords or company"
              aria-label="Search"
              className="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="inner">
          <h4>Location</h4>
          <div className="form">
            <i class="bi bi-geo-alt"></i>
            <input
              type="search"
              placeholder="City or postcode"
              aria-label="Search"
              className="search"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <div className="inner">
          <h4>Location</h4>
          <div className="form">
            {/* <i class="bi bi-geo-alt"></i> */}
            <input type="range" min="0" max="100" className="search" />
          </div>
        </div>
        <div className="inner">
          <h4>Category</h4>
          <div className="form">
            <i class="bi bi-briefcase"></i>
            <select
              name="category"
              id="category"
              style={{ border: "none", backgroundColor: "white" }}
              placeholder="Choose"
              className="search"
              onChange={(e) => {
                setCate(e.target.value);
              }}
            >
              <option value="" disabled selected hidden>
                Choose a category
              </option>
              <option value="">All</option>
              <option value="frontend developer">Frontend Developer</option>
              <option value="backend">Backend</option>
              <option value="uiux">Uiux</option>
              <option value="react">React</option>
            </select>
          </div>
        </div>
        <div className="inner" style={{ marginBottom: "10px" }}>
          <h4>Candidate Gender</h4>
          <div className="form">
            <i class="bi bi-gender-trans"></i>
            {/* <input
              type="search"
              placeholder="gender"
              aria-label="Search"
              className="search"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            /> */}
            <select
              name="category"
              id="category"
              style={{ border: "none", backgroundColor: "white" }}
              placeholder="Choose"
              className="search"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value="" disabled selected hidden>
                Choose Gender
              </option>
              <option value="">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
      </div>
      <Dashboard
        search={search}
        locations={location}
        genders={gender}
        cate={cate}
      />
    </div>
  );
}

export default Filter;
