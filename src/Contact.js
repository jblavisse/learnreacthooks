import React from 'react';

const Contact = (props) => {
    return(
        <React.Fragment>{props.firstname} {props.lastname}</React.Fragment>
    )
}

export default Contact;