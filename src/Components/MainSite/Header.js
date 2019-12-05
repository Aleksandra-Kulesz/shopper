import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

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
                    <li><HashLink to='#about' scroll={el => el.scrollIntoView({behavior: 'smooth'})}>O
                        Aplikacji</HashLink></li>
                    <li><HashLink to='#contact'
                                  scroll={el => el.scrollIntoView({behavior: 'smooth'})}>Kontakt</HashLink></li>
                    <li><Link to='/login'>Logowanie</Link></li>
                </ul>
            </nav>
        </header>
    )
};


export {Header};