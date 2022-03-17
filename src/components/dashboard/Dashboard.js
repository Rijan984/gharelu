import React, { useEffect, useState } from "react";
import data from "../../data";
import Filter from "../filter/Filter";
import "./dashboars.css";
function Dashboard({ search, locations, genders, cate }) {
  const [first, setfirst] = useState(data);
  const [newData, setNewData] = useState(data);
  const [newGender, setNewGender] = useState(data);
  const [newCate, setNewCate] = useState(data);

  useEffect(() => {
    if (search) {
      const searched = data.filter((newData) => {
        const { title } = newData;
        return title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
      });
      setfirst(searched);
      setNewData(searched);
      setNewGender(searched);
      setNewCate(searched);
    } else if (search === "") {
      setfirst(data);
      setNewData(data);
      setNewGender(data);
      setNewCate(data);
    }
  }, [search]);
  useEffect(() => {
    if (locations) {
      const searched = newData.filter((newDatas) => {
        const { location } = newDatas;
        return location
          .toLocaleLowerCase()
          .includes(locations.toLocaleLowerCase());
      });
      setfirst(searched);
      setNewGender(searched);
      setNewCate(searched);
    }
  }, [locations]);

  useEffect(() => {
    if (cate) {
      const searched = newCate.filter((newData) => {
        const { category } = newData;
        return category.toLocaleLowerCase().includes(cate.toLocaleLowerCase());
      });
      setfirst(searched);
      setNewGender(searched);
    } else if (cate === "") {
      setfirst(newCate);
      setNewGender(newCate);
    }
  }, [cate, newCate]);

  useEffect(() => {
    if (genders) {
      const searched = newGender.filter((newData) => {
        const { gender } = newData;
        return gender === genders;
      });
      setfirst(searched);
      // setNewCate(searched);
    } else if (genders === "") {
      setfirst(newGender);
    }
  }, [genders, newGender]);

  return (
    <div className="data">
      <div className="header">
        <p
          style={{
            fontSize: "20px",
            marginLeft: "10px",
            float: "left",
          }}
        >
          Showing <b>{first.length} out of </b>
          <b>{data.length}</b> jobs
        </p>
        <div className="drop">
          {/* <div className="formss"> */}
          {/* <i class="bi bi-briefcase"></i> */}
          <div className="select">
            <select
              name="category"
              id="cate"
              style={{ border: "none", float: "left" }}
              placeholder="Choose"
              className="drop"
            >
              <option value="" disabled selected hidden>
                New Jobs
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="select">
            <select
              name="category"
              id="cate"
              style={{ border: "none", float: "left" }}
              placeholder="Choose"
              className="drop"
            >
              <option value="" disabled selected hidden>
                New Jobs
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          {/* </div>*/}
        </div>
      </div>
      {first && (
        <div className="jobContent">
          {first.map((jobs, index) => {
            const { id, name, title, price, category, img, location } = jobs;

            return (
              <div key={id} className="jobs border">
                <div className="profilePic">
                  <img src={img} alt="profile" />
                </div>
                <div className="content">
                  <div className="head">
                    <h5 style={{ marginLeft: "10px" }}>{name}</h5>
                  </div>
                  <div className="info">
                    <span style={{ marginLeft: "10px" }}>{title}</span>
                    <span style={{ marginLeft: "10px" }}>
                      <i class="bi bi-geo-alt"></i>
                      {location}
                    </span>
                    <span style={{ marginLeft: "10px" }}>
                      <i class="bi bi-cash" style={{ marginRight: "10px" }}></i>
                      ${price} / hour
                    </span>
                  </div>
                </div>
                <div className="btns ">
                  <button className="btn btn-primary">View Profile</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {first.length === 0 && <p>No Data Found</p>}
    </div>
  );
}

export default Dashboard;
