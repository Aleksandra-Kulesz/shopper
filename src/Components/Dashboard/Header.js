import React, {Component} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="logo_container">
                <Link to='/'>
                    <div className="logo"/>
                    <h1 className="logo_name">Shopper</h1>
                </Link>
            </div>
            <nav>
                <ul className={'nav_list'}>
                    <li><Link to='/dashboard'>Nowa Lista</Link></li>
                    <li><Link to='/lists'>Listy</Link></li>
                    <li>Finanse</li>
                </ul>
            </nav>
        </header>
    )
};

export {Header};