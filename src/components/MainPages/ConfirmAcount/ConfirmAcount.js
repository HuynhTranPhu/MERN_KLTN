import React, { Component} from 'react'
import axios from 'axios'
import VerifyRegisterAccount from '../../VerifyRegisterAccount/VerifyRegisterAccount'
import NotFound from '../../404/404'
require ('dotenv').config();
const url = process.env.REACT_APP_URL_CLIENT;
class VerifyRegisterAccountContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            isconfirm: true
        }
    }
    async componentWillMount() {
        try {
           await axios.get(`${url}/user/verify/` + this.props.match.params.token)
           //console.log(this.props.match.params.token);
        }
        catch(err) {
            this.setState({isconfirm: false})
        }
    }
    render() 
    {
       
        if(this.state.isconfirm) {
            return(
                <VerifyRegisterAccount/>
            )
        } else {
            return (
                <NotFound/>
            )
        }
            
    }
}
export default VerifyRegisterAccountContainer