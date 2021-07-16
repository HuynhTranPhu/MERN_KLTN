import React, { Component } from "react";
import { Link } from "react-router-dom";
import TopBar from "../Common/TopBar/TopBar";
import NavBar from "../Common/NavBar/index";
import BottomBar from "../Common/BottomBar/index";
import Footer from "../Common/Footer/Footer";
class EnterNewPassword extends Component {
  constructor() {
    super();
    this.state = {
        newpassword: '',
        confirm: '',
        noti:''
    }
  }
  handleSubmit() {
    const passWordRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/;
    if(this.state.newpassword.trim().match(passWordRegex)===null) {
        this.setState({noti:'Passwords with a length of 8-16 characters must contain numbers, lowercase letters and uppercase letters'})
        return
    } else {
        this.setState({noti: ''})
    }
    if(this.state.confirm !== this.state.newpassword) {
        this.setState({
            noti: 'Confirm invalid'
        })
        return
    } else {
        this.setState({noti: ''})
    }
    this.props.submitEnterNewPassword();
  }
  render() {
    return (
      <div>
        <TopBar/>
        <BottomBar  ></BottomBar>
        <NavBar/>
             <div className="container text-center">
              <div className="logo-404">
                <Link to="/">
                  <img src="/assets/images/home/logo.png" alt="" />
                </Link>
              </div>
              <div className="content-404 forgotpass">
                <h1>
                  <b>ENTER NEW PASSWORD</b>
                </h1>
                <p style={{ color: "tomato" }}>
                  {this.state.noti}
                </p>
                <input
                  type="password"
                  placeholder="New Password"
                  onChange={e => {this.props.setNewPassword(e.target.value) 
                      this.setState({newpassword: e.target.value})}}
                />
                <br />
                <input
                  type="password"
                  placeholder="Confirm"
                  onChange={e => {this.props.setConfirm(e.target.value)
                  this.setState({confirm: e.target.value})}}
                />
                <br />
                <button
                  className="btn btn-default"
                  onClick={() => 
                      this.handleSubmit()}
                >
                  submit
                </button>
                <div  style={{height:"80px"}}></div>
              </div>
            </div>
            <Footer/>
      </div>
     
    );
  }
}
export default EnterNewPassword;
