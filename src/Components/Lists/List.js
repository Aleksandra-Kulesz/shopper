import React, {Component} from "react";
import {Button} from "./Button";

class List extends Component{


    render() {
        console.log(this.props.lists);
        if (this.props.lists.length > 1) {
            return (

                <table>
                    <thead>
                    <tr>
                        <th>Nr</th>
                        <th>Nazwa</th>
                        <th>Data utworzenia</th>
                        <th>Otwórz listę</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.lists.map((elem, index) => {
                        return (
                            <tr key={elem.date}>
                                <td>{index + 1}</td>
                                <td>{elem.title}</td>
                                <td>{elem.date.toLocaleString()}</td>
                                <td><Button id={elem.date} openClick={(id)=>this.props.openClick(id)}/></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            )
        } else {
            return (
                <h1>Nie masz jeszcze żadnej listy.</h1>
            )
        }
    }
}

export {List};