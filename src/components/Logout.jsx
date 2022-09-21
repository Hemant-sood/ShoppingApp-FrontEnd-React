import * as React from 'react';
import {useNavigate} from 'react-router-dom';

export default function Logout(props) {
 
    console.log(props);
    props.setData({email:'', name:'', password:''});
    props.setCart([]);
    props.setTotalBill(0);
    const navigate = useNavigate();
    navigate('/login');

}
