import React, {Component} from 'react';

class ListElem extends Component {

    remove = () => {
        if (typeof this.props.remove === "function") {
            this.props.remove(this.props.id);
        }
    };

    edit= () => {
        if (typeof this.props.productChange === "function") {
            this.props.productChange(this.props.id);
        }
    };

    save= () => {
        if (typeof this.props.productSave === "function") {
            this.props.productSave(this.props.id);
        }
    };

    render() {
        if (!this.props.isEditable){
            return (
            <li>{this.props.title}
                <button className='new_list_btn' onClick={this.edit}>Edytuj</button>
                <button className='new_list_btn' onClick={this.remove}>Usuń</button>
            </li>
        )} else {
            return (
                <>
                <input className='new_list_input' type="text" onChange={this.props.handleChange} name='item'/>
                <button className='new_list_btn' onClick={this.save}>Zapisz</button>
                </>
            )
        }
    }
}

export {ListElem};