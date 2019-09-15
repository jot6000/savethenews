import React from "react";
import placeholderAvatar from "./placeholderAvatar.jpg";
// const placeholderAvatar = require("./placeholderAvatar.jpg");
// const placeholderAvatar = require("placeholderAvatar.jpg");
import basicStyling from './stylesheet.css';

function Avatar(props) {
  return ( <div>
      <img id="avatar" class="profile" src={props.avatar}/>
      <p id="username" class="profile">{props.username}</p>
    </div> );
}



export default Avatar;
