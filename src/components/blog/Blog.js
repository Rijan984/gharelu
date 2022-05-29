import React, { useState } from 'react';
import './blog.css';
import { data } from './property';
import Popup from './Popup';
function Blog() {
  const [show, setShow] = useState();
  const [info, setInfo] = useState();
  const showPop = (
    e,
    id,
    image,
    title,
    address,
    description,
    price,
    area,
    room
  ) => {
    setShow(true);
    setInfo({
      ...info,
      id,
      image,
      title,
      address,
      description,
      price,
      area,
      room,
    });
  };
  console.log(info);
  return (
    <>
      {show && <Popup info={info} setShow={setShow} />}
      <div className="blog">
        {data.map((newData) => {
          const {
            id,
            image,
            title,
            address,
            description,
            price,
            area,
            room,
          } = newData;
          return (
            <React.Fragment key={id}>
              <div
                className="blog-list"
                onClick={(e) => {
                  showPop(
                    e,
                    id,
                    image,
                    title,
                    address,
                    description,
                    price,
                    area,
                    room
                  );
                }}
              >
                <div className="blog-img">
                  <img src={image} alt="property image" />
                </div>
                <div className="blog-detail">
                  <div className="about">
                    <p>category</p>
                    <h3>Title</h3>
                    <p>ecxerpt</p>
                  </div>
                  <div className="user-detail">
                    <img src="" alt="property image" />
                    <p>User Name</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="popular">
        <div className="inner-popular">
          <div className="popular-post">
            <p>Popular Post</p>
            <div className="underline"></div>
            <div className="info">
              <img src="" alt="popular blog image" />
              <p>Category</p>
              <p>Title</p>
            </div>
            <div className="info">
              <img src="" alt="popular blog image" />
              <p>Category</p>
              <p>Title</p>
            </div>
            <div className="info">
              <img src="" alt="popular blog image" />
              <p>Category</p>
              <p>Title</p>
            </div>
          </div>
          <div className="popular-post">
            <p>Popular Post</p>
            <div className="underline"></div>
            <div className="info">
              {/* <img src="" alt="popular blog image" /> */}
              <p>Category</p>
              <p>Title</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
