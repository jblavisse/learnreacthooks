import React, {useState} from 'react';
import Contact from "./Contact";


function ContactList() {
    const [contacts,setContacts]= useState([
        {firstname: "Jb", lastname: "Lavisse"},
        {firstname: "Riri", lastname: "Duck"},
        {firstname: "Fifi", lastname: "Duck"},
        {firstname: "Loulou", lastname: "Fuck"},
    ])

    return(
        <ul>
            {contacts.map(contact => 
                <li><Contact firstname={contact.firstname} 
                lastname={contact.lastname} /></li>)}
        </ul>
    )
}

export default ContactList;