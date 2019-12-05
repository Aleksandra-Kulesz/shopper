import React, {Component} from "react";

const CarouselSlide = (props) => {

    const style =  {
        backgroundImage: `url(${props.image})`
    };

    return (
        <div className="slide" style={style}>
            <h1 className='slide_text'>{props.text}</h1>
        </div>
    )
};

export {CarouselSlide};