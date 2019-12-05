import React, {Component} from "react";

class ContactForm extends Component {
    state = {
        name: '',
        mail: '',
        message: '',
        errors: []
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleFormSubmit = e => {
        e.preventDefault();
        const errors = [];
        const {name, mail, message} = this.state;

        if (name.length < 3) {
            errors.push('Pole imię musi zawierać co najmniej 2 znaki.')
        }

        if (mail.length < 4 && !mail.includes('@')) {
            errors.push('Pole email musi zawierać znak @ i co najmniej 3 znaki.')
        }

        if (message.length<1) {
            errors.push('Pole wiadomość musi zostać uzupełnione.')
        }

        if (errors.length > 0) {
            this.setState({
                errors,
            });
        }
    };

    render() {
        return (
            <form className='contact_form' onSubmit={this.handleFormSubmit}>
                <div className='contact_form_errors'>{this.state.errors?this.state.errors:''}</div>
                <div className="contact_form_container">
                    <label> Imię
                        <input type="text" name='name' className='contact_form_input' onChange={this.handleChange}/>
                    </label>
                    <label>e-mail
                        <input type="mail" name='mail' className='contact_form_input' onChange={this.handleChange}/>
                    </label>
                    <label>Wiadomość
                        <textarea name='message' className='contact_form_input' onChange={this.handleChange}/>
                    </label>
                </div>
                <button className='contact_form_submit'>Wyślij!</button>
            </form>
        )
    }
}

export {ContactForm};