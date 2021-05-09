import React, { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import { Redirect } from 'react-router-dom';
import { updateUserPassword } from '../../../actions/userAction';
import { USER_UPDATE_PASSWORD_RESET } from '../../../constants/userConstant';
import TopBar from '../../Common/TopBar/TopBar';
import NavBar from '../../Common/NavBar/index';
import BottomBar from '../../Common/BottomBar/index';
import FooterPage from '../../Common/Footer/Footer';
import ScrollToTopBtn from '../../Common/ScrollToTop/ScrollToTop';
//import {logout} from '../../../actions/userAction'

import { toast } from 'react-toastify';

export default function UpdatePasswordScreen(){
    const [oldpassword,setOldPassword] = useState('');
    const [newpassword,setNewPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
   
    const userUpdatePassword = useSelector((state) => state.userUpdatePassword);
    const { error: errorUpdate}= userUpdatePassword;
    const dispatch = useDispatch();
   
    useEffect(() =>{
           // dispatch({type:USER_UPDATE_PASSWORD_RESET});
    },[]);
    // const logoutHandler = () =>{
    //     dispatch(logout());
    // }
    const submitHandler = (e) =>{
        e.preventDefault();
        if(errorUpdate){
            toast.error(errorUpdate);
        }
        //dispatch update
        if(newpassword===""|| confirmPassword===""){
            toast.error('New Password or Confirm Password are not valid');
        }
        else if(newpassword !== confirmPassword){
            toast.error('Password and Confirm Password are not matched');
        }else{
            dispatch(updateUserPassword( oldpassword, newpassword, userInfo.newUser.id));
            toast.success('Password Updated Successfully')

        }
       // Redirect("/logout/");
    }
    return<div>
        <TopBar/>
        <BottomBar  ></BottomBar>
        <NavBar/>
        <form className="form-profile" onSubmit={submitHandler}>
            <div>
                <h1 className="title">
                   Change Password
                </h1>
            </div>
            {
                    <>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                onChange={(e) => setOldPassword(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="newPassword">New Password</label>
                            <input
                                id="newPassword"
                                type="password"
                                placeholder="Enter new password"
                                onChange={(e) => setNewPassword(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Enter confirm password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label> </label>
                            <button className="button primary update-profile" type="submit" >
                                Update
                            </button>
                        </div>
                    </>
            }
        </form>
        <FooterPage/>
       <ScrollToTopBtn />
    </div>;  
}