import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import $ from 'jquery';
import _ from 'lodash';
import {useNavigate} from 'react-router-dom';
 


function Checkout(props) {

    const paperStyle = { padding:"50px 20px", width:600, margin:"40px auto"};

    const [open, setOpen] = React.useState(false);
    const [isPaid, setIsPaid] = React.useState(false);
    const [deliveryAddress, setDeliveryAddress] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [error, setError ] = React.useState('missing');
    const [isError, setIsError] = React.useState(true);

    const navigate = useNavigate();
 
    React.useEffect( () => {
        if( props.userValue.email === '' ) 
            navigate('/login');
    },[])

 
 

    const LoginError = ()=> {
        return( 
          <div>
            <Alert severity="error">{error}</Alert><br/>
          </div>
        );
      };
  


    const handleClickOpen = () => {
        
        setDeliveryAddress($('#deliveryId').val());
 
        setContact($('#contactId').val());
        
        setOpen(true);

    };
  
    const handleDeny = () => {
      setOpen(false);
    };

    const handlePay = () => {
        
        setOpen(false);
        setIsPaid(true);
 
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        
        var orders = _.cloneDeep(props.cart) ;

        orders.map( (ele) => {

            delete ele.description;
            

            delete ele.name;

            ele.productID = ele._id;
            delete ele._id;

            ele.billAmount = ele.qty * ele.price;
            delete ele.price;

            ele.orderTime = dateTime;
             
            ele.deliveryAddress = deliveryAddress;

            ele.contact = contact;

            ele.userEmail = props.userValue.email;


        });
        
        fetch('http://localhost:8083/ShoppingBackEnd/placeOrder', {
          
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(orders)
  
        })
        .then( response =>response.json())
        .then(response => {
  
          console.log(response);

        });
 
    };


    const BeforePayContent = ()=>{
        return(

            <div>
  
             <Paper elevation={1} style={paperStyle } >
                <h1 className="center">CheckOut</h1><br/>
                <div>

                    <TextField id="deliveryId" label="Shipping Address" variant="outlined" multiline fullWidth  />
                </div><br/>
                <div>
                    <TextField id="contactId" label="Contact Number" variant="outlined" fullWidth  />
                </div><br/>


                <p className="display-5 text-primary"> $ {props.totalBill}</p>
                <button type="button" class="btn btn-warning" onClick={handleClickOpen} >Pay & Place Order</button>
            </Paper>

            <Dialog
                open={open}
                onClose={handleDeny}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">
            {"Are you sure to Pay Amount"}
            </DialogTitle>
            <DialogActions>
                <Button onClick={handleDeny}>Deny</Button>
                <Button onClick={handlePay} autoFocus> Pay </Button>
            </DialogActions>
        </Dialog>
        </div>

        );
    }
  
    const AfterPayContent = () => {

           
        React.useEffect( ()=>{
            props.setTotalBill(0);
            props.setCart([]);
        }, []);   
  

        return(
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <div style={{marginTop:"100px"}} >
                            <Alert
                                variant="filled"
                                iconMapping={{
                                success: <CheckCircleOutlineIcon fontSize="inherit" />,
                                }}
                            >Hooore!   Payment successfully</Alert>
                        </div><br/>
                        <h2>Your Item will be delivered soon on your address <br/><br/>Keep Shopping</h2>
                        
                    </div>
                </div>
                <div className="col-4"></div>                
            </div>
        );
    }
 
    return(

        <div>
            { isPaid ? <AfterPayContent/> : <BeforePayContent/> }            
       </div>
     
    );
}

export default Checkout;