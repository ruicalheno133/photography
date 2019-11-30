import React from "react";
import { render } from "react-dom";

class Footer extends React.Component {
    render() {
        return (
            <div className="contacts footer" style={footerStyle}>
                <a className="insta" target="_blank" href="https://www.instagram.com/ruicalheno133/"><i className="fab fa-instagram"></i></a>
                <a className="px" target="_blank" href="https://500px.com/ruic66"><i className="fab fa-500px"></i></a>
               { /*  <a className="mail" href="" data-toggle="modal" data-target="#contact-form"><i className="far fa-envelope"></i></a> */ }
             </div>
        )
    }
}

const footerStyle = {
    marginTop: 50,
}

export default Footer;