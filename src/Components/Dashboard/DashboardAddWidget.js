import React, {Component} from "react";

const DashboardAddWidget = (props) => {
    return (
        <section className='add' onClick={props.new}>
            <div className='add_logo'/>
            <h1 className='add_name'>Utwórz listę</h1>
            <i className="far fa-plus-square"/>
            <div className="tail"/>
        </section>
    )
};

export {DashboardAddWidget};