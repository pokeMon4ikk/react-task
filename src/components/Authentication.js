import React from 'react';
import '../index.css';

class Auth extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
        }
    }

    handleChange(event)
    {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    handleSubmit(event) {
        const user1 = {
            login: 'User1',
            password: 'pass1'
        }
        const user2 = {
            login: 'User2',
            password: 'pass2'
        }

        if ((this.state.login === user1.login && this.state.password === user1.password) ||
        (this.state.login === user2.login && this.state.password === user2.password)){
            this.setState(
                {
                    [event.target.name]: event.target.value
                }
            )
            this.props.getAuth(this.state.login, this.state.password)
        }else{
            alert('Неверный логин или пароль')
            this.setState(
            {
                login: '',
                password: ''
            })
        }
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={(event)=> this.handleSubmit(event)}>
                <input type="text" name="login" placeholder="login"
                    value={this.state.login} onChange={(event)=>this.handleChange(event)} />
                <input type="password" name="password" placeholder="password"
                    value={this.state.password} onChange={(event)=>this.handleChange(event)} />
                <input type="submit" value="Login"></input>
            </form>
        );
    }
}

export default Auth;