import React, {useState, useEffect} from 'react';
import Contact from "./Contact";
import axios from 'axios';


function ContactList() {
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            setContacts(res.data);
        })
    }, [])

    const [contacts,setContacts]= useState([])

    return(
        <ul>
            {contacts.map(contact => 
                <li key={contact.id}><Contact name={contact.name} /></li>)}
        </ul>
    )
}

export default ContactList;