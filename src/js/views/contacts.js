import React, { useContext } from "react";
import ContactCard from '../component/contactCard';
// import Navbar from '../component/navbar';
import { Context } from "../store/appContext"; 
import { Link } from "react-router-dom";

const Contacts = () => {
    const { store } = useContext(Context);

    return(
        <div className="container-fluid mt-5" style={{justifyContent: "center"}}>
            <h1 className="display-3 text-center mb-5">Bienvenid@ a tu lista de contactos!</h1>

           

        {store.contacts.map((contact, index) => 
            <ContactCard id={contact.id} name={contact.name} phone={contact.phone} email={contact.email} address={contact.address} key={index}/>
        )}

            <div className="mt-2 mb-5" style={{justifyContent: "center", display: "flex"}}>
                 <Link to="/add-contact">
						<button className="btn btn-light">Agregar nuevo contacto</button>
			    </Link>
            </div>
    
    </div>
    )
}

export default Contacts;