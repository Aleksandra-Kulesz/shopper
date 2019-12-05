import React, {Component} from "react";

const Footer = () => {
    return (
        <footer>
            <div className="footer_social">
                <a href="http://facebook.com"><i className="fab fa-facebook-f"/></a>
                <a href="http://twitter.com"><i className="fab fa-twitter"/></a>
                <a href="http://instagram.com"><i className="fab fa-instagram"/></a>
            </div>
            <div className="footer_copy">
                2019 &copy; A. Kulesz
            </div>
        </footer>
    )
};

export {Footer};