import React from "react";
import { Link } from "react-router-dom";

function ContactCard() {
  



    return(
      <div className="d-flex justify-content-center">
        <div className="card mb-4" style={{width: "40rem", height: "10rem"}}>
          <div className="row g-0">
            <div className="col-md-3">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="rounded-circle" style={{width: "150px", height: "150px"}} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Nombre Apellido</h5>
                <p className="text-body-secondary"><i class="fa-solid fa-location-dot"></i>Dirección</p>
                <p className="card-text"><i class="fa-solid fa-phone"></i>Teléfono</p>
                <p className="card-text"><i class="fa-solid fa-envelope"></i>Mail</p>
              </div>
            </div>
            <div className="col-md-1">
              <button><i class="fa-solid fa-pencil"></i></button>
              <button><i class="fa-solid fa-trash-can"></i></button>

           </div>
          </div>
        </div>
      </div>
    );
};

export default ContactCard;