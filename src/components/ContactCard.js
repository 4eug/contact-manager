import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {

    const {id, name, email} = props.contact;

  return (
    <div className="item">
        <img className="image" src={user} alt="user"/>
      <div className="content">
        <div className="header">{name}</div>
        <div className="description">{email}</div>
      </div>
      <i className="trash alternate outline icon"
      style={{color:"red", marginTop:"7px"}} 
      onClick={() => props.clickHander(id)}/>
    </div>
  );
  };

export default ContactCard;