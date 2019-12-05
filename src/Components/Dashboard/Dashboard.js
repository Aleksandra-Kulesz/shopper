import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import {Header} from "./Header";
import {DashboardAddWidget} from './DashboardAddWidget'
import {NewList} from './NewList'
import {Footer} from "../MainSite/Footer";

class Dashboard extends Component {
    state = {
        new: false,
        title: new Date(),
        isTitleEditable: false,
        product: '',
        productList: [],
        item: '',
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleClick = () => {
        this.setState({new: true})
    };

    handleNameChange = () => {
        this.setState({isTitleEditable: true})
    };

    handleNameSave = () => {
        this.setState({isTitleEditable: false})
    };

    handleNewProduct = () => {
        const uuidv1 = require('uuid/v1');
        const productList = [...this.state.productList, {
            id: uuidv1(),
            title: this.state.product,
            isProductEditable: false,
        }];
        this.setState({
            productList,
            product: '',
            item: ''
        })
    };

    handleRemoveProduct = (id) => {
        const productList = this.state.productList.filter((elem) => {
            return elem.id !== id
        });
        this.setState({productList})
    };

    handleProductChange = (id) => {
        let productList = this.state.productList.filter((elem) => {
            return elem.id !== id
        });
        const productToEdit = this.state.productList.filter((elem) => {
            return elem.id === id

        });
        productToEdit[0].isProductEditable = true;
        productList = [...productList, ...productToEdit];


        this.setState({productList});
    };

    handleProductSave = (id) => {
        let productList = this.state.productList.filter((elem) => {
            return elem.id !== id
        });
        const productToEdit = this.state.productList.filter((elem) => {
            return elem.id === id
        });

        productToEdit[0].isProductEditable = false;
        productToEdit[0].title = this.state.item;
        productList = [...productList, ...productToEdit];

        this.setState({productList});
    };

    handleListSave = () => {

        const list = {
            title: this.state.title,
            date: new Date(),
            products: this.state.productList
        };

        fetch('http://localhost:3001/lists', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(list)
        }).then(data => {
            console.log(data);
            this.props.history.push({
                pathname: '/lists'
            })
        }).catch(err => {
            console.log(err)
        })
    };

    render() {
        if (this.state.new === true) {
            return (
                <div className='dashboard'>
                    <Header/>
                    <NewList title={this.state.title}
                             product={this.state.product}
                             nameChange={this.handleNameChange}
                             isTitleEditable={this.state.isTitleEditable}
                             saveTitle={this.handleNameSave}
                             handleChange={(e) => this.handleInputChange(e)}
                             list={this.state.productList}
                             addProduct={this.handleNewProduct}
                             removeProduct={(e) => this.handleRemoveProduct(e)}
                             productChange={this.handleProductChange}
                             productSave={this.handleProductSave}
                             listSave={this.handleListSave}/>
                    <Footer/>
                </div>
            )
        } else {
            return (
                <div className='dashboard'>
                    <Header/>
                    <DashboardAddWidget new={this.handleClick}/>
                    <Footer/>
                </div>
            )
        }
    }
}

export {Dashboard}

