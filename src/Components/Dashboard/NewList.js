import React, {Component} from 'react';
import {ListElem} from "./ListElem";

class NewList extends Component {

    render() {
        if (this.props.isTitleEditable === false) {
            return (
                <section className="new_list">
                    <div className='new_list_title'>
                        <h1>Tytuł: {this.props.title.toLocaleString()}</h1>
                        <button className='new_list_btn' onClick={this.props.nameChange}>Edytuj</button>
                    </div>
                    <div className='new_list_body'>
                        <ul>
                            {this.props.list === [] ? '' : this.props.list.map((elem) => {
                                return (
                                    <ListElem key={elem.id}
                                              id={elem.id}
                                              title={elem.title}
                                              isEditable={elem.isProductEditable}
                                              remove={this.props.removeProduct}
                                              productChange={this.props.productChange}
                                              productSave={this.props.productSave}
                                              handleChange={(e) => this.props.handleChange(e)}/>
                                )
                            })}
                        </ul>
                        <div className='new_list_new_product'>
                            <input className='new_list_input' name='product' type="text" value={this.props.product}
                                   onChange={this.props.handleChange}/>
                            <button className='new_list_btn' onClick={this.props.addProduct}>Dodaj produkt!</button>
                        </div>
                    </div>
                    <button onClick={this.props.listSave} className='new_list_btn new_list_submit'>Zapisz listę</button>
                </section>
            )
        } else {
            return (
                <section className='new_list'>
                    <input className='new_list_input' onChange={this.props.handleChange} type="text" name='title'/>
                    <button className='new_list_btn' onClick={this.props.saveTitle}>Zapisz nowy tytuł</button>
                </section>
            )
        }
    }
}

export {NewList};
