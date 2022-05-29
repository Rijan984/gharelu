import React from 'react';
import './blog.css';
import { data } from './property';
function Blog() {
  return (
    <>
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
            <>
              <div className="blog-list">
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
                    <h3>User Name</h3>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="popular">
        <div className="popular-post">
          <p>Popular Post</p>
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
          <div className="info">
            <img src="" alt="popular blog image" />
            <p>Category</p>
            <p>Title</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
