import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { data } from "../property";
// import Search from "../searchProperty/Search";
import "./list.css";
function List({ search, minPrice }) {
  const [property, setProperty] = useState(data);
  const [miPrice, setMiPrice] = useState(data);
  //   const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      const newProp = data.filter((details) => {
        const { address } = details;
        return address.toLocaleLowerCase().includes(search.toLocaleLowerCase());
      });
      setProperty(newProp);
      setMiPrice(newProp);
    } else {
      setProperty(data);
      setMiPrice(data);
    }
  }, [search]);
  useEffect(() => {
    if (minPrice) {
      const newProp = miPrice.filter((details) => {
        const { price } = details;
        return price >= minPrice;
        // return price.toLocaleLowerCase().includes(minPrice.toLocaleLowerCase());
      });
      setProperty(newProp);
    } else {
      setProperty(miPrice);
    }
  }, [minPrice, miPrice]);

  return (
    <div>
      {/* <Search /> */}
      <div className="propContent">
        {property.length <= 0 && (
          <p style={{ color: "red", textAlign: "center" }}>No data found</p>
        )}
        {property.map((newData) => {
          const { id, image, title, address, description, price, area, room } =
            newData;
          return (
            <React.Fragment key={id}>
              <div className="property">
                <div className="top">
                  <span
                    style={{
                      float: "left",
                      backgroundColor: "rgb(212, 212, 94)",
                    }}
                  >
                    Featured
                  </span>
                  <span
                    style={{
                      float: "right",
                      backgroundColor: "rgb(226, 62, 62)",
                    }}
                  >
                    New Offer
                  </span>
                  <span
                    style={{
                      float: "right",
                      backgroundColor: "rgb(62, 128, 226)",
                    }}
                  >
                    Sales
                  </span>
                </div>
                <div className="pic">
                  <img src={image} alt="house" />
                </div>
                <div className="propText">
                  <h4>
                    {title} at {address}
                  </h4>
                  <p style={{ color: "blue" }}>from ${price}</p>
                  <p>{description}</p>
                  <div className="details">
                    <p style={{ marginRight: "10px" }}>
                      <i
                        className="fa-solid fa-bed"
                        style={{ marginRight: "5px" }}
                      ></i>
                      {room}
                    </p>
                    <p>
                      <i
                        className="fas fa-vector-square"
                        style={{ marginRight: "5px" }}
                      ></i>
                      {area}
                    </p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default List;
