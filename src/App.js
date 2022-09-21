import * as React from 'react';
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar"; 
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import ProductInfo from "./components/ProductInfo";
import Footer from './components/Footer';
import About from './components/About';
import Logout from './components/Logout';
import Checkout from './components/Checkout';
import Profile from './components/Profile';
import MyOrders from './components/MyOrders';

function App() {

   const initialValues = {email:'', name:''};
   const [userValue, setUserValue] = React.useState(initialValues);
   const [cart, setCart] = React.useState([]);
   const [totalBill, setTotalBill] = React.useState(0);
   const [products, setProducts] = React.useState([]);
   const [brandForSort, setBrandForSort] = React.useState('');
   const [minPriceForSort, setMinPriceForSort] = React.useState(0);
   const [maxPriceForSort, setMaxPriceForSort] = React.useState(100000);
   const [snakBarMsg, setSnakBarMsg] = React.useState('');

      return ( 
         <div className="App">
            <BrowserRouter>
               <NavBar  data = {userValue} cart = {cart} />
               <Routes>
                  <Route exact path="/" element={<Home userValue ={userValue} snakBarMsg={snakBarMsg} setSnakBarMsg={setSnakBarMsg} cart={cart}  setCart={setCart} totalBill={totalBill} setTotalBill={setTotalBill} products={products} setProducts={setProducts} brandForSort={brandForSort} setBrandForSort = {setBrandForSort} minPriceForSort={minPriceForSort} setMinPriceForSort={setMinPriceForSort}  maxPriceForSort={maxPriceForSort}  setMaxPriceForSort={setMaxPriceForSort}  />}/>
                  <Route exact path="/login" element={<Login setData = {setUserValue} />}/>
                  <Route exact path="/register" element={<Register setData = {setUserValue} />}/> 
                  <Route exact path="/cart" element={<Cart userValue ={userValue}  cart={cart} totalBill={totalBill} setTotalBill={setTotalBill} />}/> 
                  <Route exact path="/productinfo/:id" element={  <ProductInfo userValue ={userValue} snakBarMsg={snakBarMsg} setSnakBarMsg={setSnakBarMsg} products = {products} cart={cart} setCart={setCart}  totalBill={totalBill} setTotalBill={setTotalBill}  />  }/>   
                  <Route exact path="/about" element={  <About  />  }/>            
                  <Route exact path="/logout" element={  <Logout setData = {setUserValue} setCart={setCart} setTotalBill={setTotalBill} />  }/>            
                  <Route exact path="/checkout" element={  <Checkout userValue = {userValue}   setData = {setUserValue} setCart={setCart}  products={products} cart={cart} totalBill={totalBill}  setTotalBill={setTotalBill}/>  }/>                              
                  <Route exact path="/profile" element={  <Profile userValue ={userValue}  />  }/>   
                  <Route exact path="/myorders" element={  <MyOrders userValue ={userValue} products={products}  />  }/>            
         

                  <Route path="*" element={<NotFound/>}/>
               </Routes>  
               <Footer/>
            </BrowserRouter>
         </div>
      );      
}

 
 
export default App;
