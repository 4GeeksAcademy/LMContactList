import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router";

const ContactForm = (props) => {

    const [nameValue, setNameValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [addressValue, setAddressValue] = useState("");
    
    
    const nav = useNavigate();
    
    
    const { store, actions } = useContext(Context);

    const { theid } = useParams();

    useEffect(() => {
        if(theid) {
            actions.getContact(theid);
        }else{
            setNameValue("");
            setPhoneValue("");
            setAddressValue("");
            setEmailValue("");
        }
    }, [theid]);

    useEffect(() => {
        if(store.selectedContact && theid) {
            setNameValue(store.selectedContact.name);
            setPhoneValue(store.selectedContact.phone);
            setAddressValue(store.selectedContact.address);
            setEmailValue(store.selectedContact.email);
        }
    }, [store.selectedContact]);

    const submitForm = (e) => {
        e.preventDefault();
        if(theid){
            actions.updateContact(theid, nameValue, phoneValue, emailValue, addressValue);
        }else{
            actions.createContact(nameValue, phoneValue, emailValue, addressValue);
        }
        nav("/contacts");
    }

    return(
        <div className="m-5">
            <h2 className="text-center">{props.titulo}</h2>
            <form onSubmit={submitForm}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre:</label>
                <input type="text" className="form-control" id="name" onChange={(e) => setNameValue(e.target.value)} value={nameValue} />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input type="text" className="form-control" id="phone" onChange={(e) => setPhoneValue(e.target.value)} value={phoneValue}/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" id="email" onChange={(e) => setEmailValue(e.target.value)} value={emailValue}/>
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Dirección</label>
                <input type="text" className="form-control" id="address" onChange={(e) => setAddressValue(e.target.value)} value={addressValue} />
            </div>
            <div>
                <button type="submit" className="btn btn-primary col-md-12" style={{border: "none", backgroundColor: "#44086a"}}>Agregar contacto</button>
            </div>
            </form>
        </div>
    )
}
export default ContactForm;