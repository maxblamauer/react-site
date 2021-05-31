import React from "react";
import "./componentStyles/Card.css";


export default function Card(props) {
  const { title, imageUrl, body } = props;
  console.log(imageUrl)
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="hehe" />
      </div>
      <div className="card-content">


      <div className="card-title">
            <h3>{title}</h3>
      </div>
      <div className="card-body">
          <p>{body}</p>
      </div>
      </div>
      <div className="card-button">
            <button>
                <a className="card-button-link" href="">
                    View More
                </a>
            </button>
      </div>
    </div>
  );
}
