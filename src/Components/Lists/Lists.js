import React, {Component} from "react";
import {Header} from "../Dashboard/Header";
import {List} from "./List";
import {Footer} from "../MainSite/Footer";
import {ListItem} from "./ListItem";

class Lists extends Component {
    state = {
        lists: [],
        areListsVisible: true,
        listID:"",
        areFinishedLoading: false,
    };

    componentDidMount() {
        console.log('ladowanie listy');
        fetch('http://localhost:3001/lists').then(r => {
            if (r.ok === true) {
                return r.json();
            } else {
                throw new Error('Do głębokiego dupska')
            }
        }).then(data => {
            console.log(data);
            this.setState({
                lists: data,
                areFinishedLoading: true,
            });
        }).catch(err => {
            console.log(err)
        })
    }

    handleOpenClick = (id) => {
        this.setState({areListsVisible:false, listID:id})
};

    render() {
        if (this.state.areListsVisible && this.state.areFinishedLoading){
            return (
                <div className='lists'>
                    <Header/>
                    <List lists={this.state.lists} openClick={(id)=>this.handleOpenClick(id)}/>
                    <Footer/>
                </div>
            )
        } else if (this.state.areFinishedLoading) {
            return (
                <div className='lists'>
                    <Header/>
                    <ListItem id={this.state.listID} lists={this.state.lists}/>
                    <Footer/>
                </div>
            )
        } else {
            return null;
        }

    }
}

export {Lists};