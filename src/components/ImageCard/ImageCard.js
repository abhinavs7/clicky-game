import React from "react";
import { Component } from "react";

import "./ImageCard.css";

const ImageCard =props=>{
    return (<div className="card">
      <div className="img-container">
      <img alt={props.id} src={props.image} name = {props.name} onClick = {()=>{props.clickImage(props.id)}}/>
      </div>
    </div>)

}

export default ImageCard;
