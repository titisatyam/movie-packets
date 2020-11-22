import React from "react";
import loginImg from "../../login.svg";
import { Link,Redirect } from "react-router-dom";



export class Login extends React.Component{
    constructor(props){
        super(props)
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state={
            username:'',
            password:'',
            redirectToReferrer: false
        }
    }

    onChangeUsername(e) {
        this.setState({ username: e.target.value })
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

     submitForm = (e) => {
        e.preventDefault()
        let userData =JSON.parse(localStorage.getItem('user'));
        console.log()
        if (this.state.username === "" || this.state.password === "") {
           return
        } else if(userData.email === this.state.username && userData.password == this.state.password){
            this.props.history.push('/movies');
        } else if(userData.phone === this.state.username && userData.password === this.state.password){
            this.props.history.push('/movies');
        } else{
            alert('error')
        }

      };
    render(){
        return <div className="base-container">
            <div className="header">
                <div className="content">
                    <div className="image">
                        <img src={loginImg}/>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username/Mobile</label>
                            <input type="text" name="username" placeholder="username/mobile" value={this.state.username}
                                onChange={this.onChangeUsername}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password">Password</label>
                            <input type="password" name="password" placeholder="password" value={this.state.password}
                                onChange={this.onChangePassword}/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                <button type="button" className="btn" onClick={this.submitForm}>
                    Login
                </button>
                </div>

                <div>
                    <ul>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    }


}