import React from "react";
import {Link} from 'react-router-dom';


function MyOrders(props) {

    const [orders, setOrders] = React.useState([]);
    var sno = 1;

    React.useEffect(()=>{
      fetch("http://localhost:8083/ShoppingBackEnd/getAllOrders", {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(props.userValue)
      })
      .then(res=>res.json())
      .then((result)=>{
        setOrders(result);
        console.log(result);
      })
    }, []);

    


    return(

        <React.Fragment>
        
        <div className="container">
        <br/>
        <h1 className="text-center">Your Orders</h1>
        <br/><br/>
        <table className="table table-dark table-striped">
            <thead>
                <tr >
                    <th scope="col">#</th>
                    <th scope="col">Product</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Bill Amount</th>
                    <th scope="col">Delivery Address</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Order Time</th>
                </tr>
            </thead>
            <tbody>
                    {
                        
                        orders.map(  item => ( 
                            <tr>
                                <td>{sno++}</td>
                                 <td> 
                                <Link to={`/productInfo/${item.productID}`} underline="none"> 
                                    <img width="80px" height="80px" src = {item.imgUrl}/>
                                </Link>
                                </td>
                                <td>{item.qty}</td>
                                <td>$ {item.billAmount}</td>
                                <td>{item.deliveryAddress}</td>
                                <td>{item.contact}</td>
                                <td>{item.orderTime}</td>
                            </tr>
                        ))
                    }
 
             </tbody>
        </table>
        </div>

        </React.Fragment>

    );

}
export default MyOrders;
