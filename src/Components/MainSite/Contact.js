import React, {Component} from "react";
import {ContactForm} from "./ContactForm";

const Contact = (props) => {
        return (
            <section className='contact' id={'contact'}>
                <h2 className='contact_header'>Kontakt</h2>
                <div className='contact_data'>
                    <div className='contact_data_item'><i className="fas fa-phone-square"/> +48 000 000 000</div>
                    <div className='contact_data_item'><i className="fas fa-at"/> contact@shopper.com</div>
                    <div className='contact_data_item'><i className="far fa-envelope"/> ul. Zakupowa 00, <span>00-000 Szopinek</span>
                    </div>
                </div>
                <ContactForm/>
            </section>
        )
};

export {Contact};