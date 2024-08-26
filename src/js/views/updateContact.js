import React from "react";
import ContactForm from "../component/ContactForm";
import GoBack from "../component/goBack";

const UpdateContact = () => {
    
    return (
        <div className="container">
            <ContactForm titulo="Editar contacto"/>
            <GoBack />
        </div>
        
    );   
}

export default UpdateContact;