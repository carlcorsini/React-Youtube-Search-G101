import React, { Component } from 'react';

const Card = (props) => (
  <div className="card col-4">
    <div className="card-img-top">
      <iframe
        title={props.title}
        width="100%"
        height="250px"
        src={`https://www.youtube.com/embed/${props.videoId}`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
    <div className="card-body">
      <h5 className="card-title">
        {props.title}
      </h5>
      <p className="card-text">
        {props.description}
      </p>
      <a 
        href={props.buttonLink} 
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-sm">
        {props.buttonText || "Go"}
      </a>
    </div>
  </div>
)

export default Card;