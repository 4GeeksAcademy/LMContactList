import React, { useState, useEffect, useContext } from "react";
import GoBack from '../component/goBack'
import ContactForm from '../component/ContactForm'

const AddContact = () => {
    return(
        <div className="container">
            <ContactForm titulo="Agregar nuevo contacto"/>
            <GoBack />
        </div>
    )
}

export default AddContact;