import React from "react";

function AddContact() {
    return(
        <div className="conteiner">
            <h1 className="text-center">AddContact</h1>
            <div className="row-g0">
                <div className="col-12">
                    <label>Full Name </label><br></br>
                    <input className="form-control mb-3" type="text" placeholder="Full Name"></input>
                </div>
                <div className="col-12">
                    <label>Email </label><br></br>
                    <input className="form-control mb-3" type="text" placeholder="Enter email"></input>
                </div>
                <div className="col-12">
                    <label>Phone </label><br></br>
                    <input className="form-control mb-3" type="text" placeholder="Enter phone"></input>
                </div>
                <div className="col-12">
                    <label>Address </label><br></br>
                    <input className="form-control mb-3" type="text" placeholder="Enter address"></input>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">Save</button>
                </div>
                
              
            </div>
        </div>
        
    )
}

export default AddContact;