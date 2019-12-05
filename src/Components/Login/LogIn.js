import React, {Component} from "react";
import { withRouter } from 'react-router-dom';

class LogIn extends Component {
    state = {
        login: '',
        password: '',
        correctLogin: 'Tynusz',
        correctPassword: '12345',
        isLogged: false,
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
        const {login, password, correctLogin, correctPassword} = this.state;

        if (login !== correctLogin || password !== correctPassword) {
            errors.push('Podane hasło lub login są nieprawidłowe.');
            this.setState({
                errors,
                isLogged: false
            });
        } else {
            this.setState({
                errors
            }, () => {
                this.setState({isLogged: true})
            });
            this.props.history.push({
                pathname: '/dashboard'
            });
        }
    };

    render() {
        if (this.state.isLogged === false) {
            return (
                <section className='login'>

                    <div className="login_logo"/>
                    <h1 className='login_name'>Shopper</h1>
                    <h2 className='login_sentence'>Your shopping Manager</h2>

                    <form className='login_form' onSubmit={this.handleFormSubmit}>
                        <div className="login_form_inputs">
                            <label>Login:
                                <input onChange={this.handleChange} name='login' className='login_form_elem'
                                       type="text"/>
                            </label>
                            <label>Hasło:
                                <input onChange={this.handleChange} name='password' className='login_form_elem'
                                       type="password"/>
                            </label>
                            <div className="login_form_errors">{this.state.errors}</div>
                        </div>
                        <button>Zaloguj!</button>
                    </form>

                </section>
            )
        }
    }
}

export {LogIn}