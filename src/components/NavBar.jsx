import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import {LinkContainer} from 'react-router-bootstrap';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import FontAwesomeIcon from '@fortawesome/fontawesome-svg-core';



function NavBar(props){
   

    const navigate = useNavigate();


    const LoginLink = ()=>{
        return (
            <LinkContainer to="/login"  style={  {color: 'white'} }> 
                 <Nav.Link >Login</Nav.Link>
            </LinkContainer>        
            );
      };

      const RegisterLink = ()=>{
        return (
            <LinkContainer to="/register"  style={  {color: 'white'} }>  
                <Nav.Link  >Register</Nav.Link>
            </LinkContainer>                              
            );
      };      

  
      
      
      const CartLink = ()=>{
        return (
            <LinkContainer to="/cart"> 
                <Nav.Link style={  {color: 'white'} }>
                    <Badge badgeContent={props.cart.length} color="secondary">
                        <ShoppingCartOutlined/>
                    </Badge>&nbsp;&nbsp;
                </Nav.Link>
            </LinkContainer>                            
            );
      };     
           

    const goToProfil = ()=> {
        navigate('/profile');
    }

    const goToLogout = () => {
        navigate('/logout');
    }

    const goToMyOrders = () => {
        navigate('/myorders');
    }

      const BasicMenu = () => {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };
      
        return (
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              style={  {color: 'white'} }
             >
              {props.data.name} <ArrowDropDownOutlinedIcon/>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={goToProfil}> <AccountCircleOutlinedIcon/> &nbsp; Profile</MenuItem>
              <MenuItem onClick={goToMyOrders}> <i class="fa-solid fa-box"></i>&nbsp; My Orders </MenuItem>
              <MenuItem onClick={goToLogout}> <LogoutIcon/> &nbsp; Logout</MenuItem>
            </Menu>
          </div>
        );
      }



    return (
         
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <LinkContainer to="/"> 
                <Navbar.Brand ><b>eMobShopper</b></Navbar.Brand>
            </LinkContainer>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto ">
        
            </Nav> 

            <Nav> 

                { props.data.name.localeCompare('') == 1 ? <React.Fragment>  <CartLink/> <BasicMenu/>  </React.Fragment> : <React.Fragment> <LoginLink/> <RegisterLink/> </React.Fragment>}                                                                                  
                                
             </Nav>
             
            </Navbar.Collapse>

        </Container>
    </Navbar>
    );
}

export default NavBar;