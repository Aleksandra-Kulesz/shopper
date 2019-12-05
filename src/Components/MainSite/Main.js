import React, {Component} from "react";
import {Header} from "./Header";
import {Carousel} from "./Carousel";
import {About} from "./About";
import {Contact} from "./Contact";
import {Footer} from "./Footer";

const Main = () => {
    return (
        <>
            <Header/>
            <Carousel/>
            <About/>
            <Contact/>
            <Footer/>
        </>
    )
};

export {Main};