import React from "react";
import { Link } from "react-router-dom";


export class Register extends React.Component{

    userData;
    constructor(props){
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            email: '',
            phone: '',
            password:'',
            newPassword:''
        }
    }
    // Form Events
    onChangeName(e) {
        this.setState({ username: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }
    onChangeNewPassword(e) {
        this.setState({ newPassword: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        this.setState({
            username: '',
            email: '',
            phone: '',
            password:'',
            newPassword:''
        })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                username: this.userData.username,
                email: this.userData.email,
                phone: this.userData.phone,
                password: this.userData.password,
                newPassword: this.userData.newPassword
            })
        } else {
            this.setState({
                username: '',
                email: '',
                phone: '',
                password:'',
                newPassword:''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    render(){
        return <div className="base-container">
            <div className="header">
                <div className="content">
                    <div className="">
                        Registration Form
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="Name">Name</label>
                            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.onChangeName}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Email">Email</label>
                            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Mobile">Mobile</label>
                            <input type="number" name="mobile" placeholder="Mobile" value={this.state.phone} onChange={this.onChangePhone}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password">Password</label>
                            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="New Password">New Password</label>
                            <input type="password" name="password" placeholder="New Password" value={this.state.newPassword} onChange={this.onChangeNewPassword}/>
                        </div>

                    </div>
                </div>
                <div className="footer">
                <Link to="/">
                    <button type="button" className="btn">
                       Register
                    </button>
                </Link>


                </div>
            </div>
        </div>
    }


}