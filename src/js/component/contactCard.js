import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Context } from '../store/appContext'


const ContactCard = (props) => {
    const { actions } = useContext(Context);
    const nav = useNavigate();
    const { theid } = useParams();

    const handleDelete = () => {
      actions.deleteContact(props.id);
    }

    const handleEdit = () => {
        nav(`/update/${props.id}`);
    }

    return(
        <div className="d-flex" style={{justifyContent: "center"}}>
        <div className="card mb-4" style={{width: "600px", backgroundColor: "#d1b2ed", borderColor: "#44086a", borderStyle: "double"}}>
          <div className="row g-0">
            <div className="col-md-3">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="rounded-circle" style={{width: "150px", height: "150px"}} />
            </div>
            <div className="col-md-8">
              <div className="cardBody" style={{marginLeft: "20px"}}>
                <h5 className="cardTitle">{props.name}</h5>
                <p className="textBodySecondary"><i class="fa-solid fa-location-dot"></i>{props.address}</p>
                <p className="cardText"><i class="fa-solid fa-phone"></i>{props.phone}</p>
                <p className="cardText"><i class="fa-solid fa-envelope"></i>{props.email}</p>
              </div>
            </div>
            <div className="col-md-1" style={{display: "flex"}}>
              <button style={{background: "none", border: "none"}} onClick={handleEdit}><i class="fa-solid fa-pencil"></i></button>
              <button style={{background: "none", border: "none"}} onClick={handleDelete}><i class="fa-solid fa-trash-can"></i></button>
           </div>
          </div>
        </div>
        
      </div>

    )
}
export default ContactCard;