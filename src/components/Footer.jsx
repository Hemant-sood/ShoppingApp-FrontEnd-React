import React from "react";
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

function Footer() {
    return (
        
        <div id = "footer" style={{marginTop:"200px"}}> 
            <br/><br/>
            <Card   className="bg-dark text-white"> <br/>
                <div className="container">
                    <div className="row">

                        <div className="col-4">
                            <h4><b>eMobShopper</b></h4> <br/>
                            <p className="fw-light">If you Can't <br/>Stop Thinking About IT...<br/> BUY IT</p>
                       
                        </div>

                        <div className="col-4">
                            <h4><b>Links</b></h4> <br/>
                            <Link to="/"  style={{color:'white',  textDecoration: 'none'}}>Home</Link><br/>     
                            <Link to="/cart" style={{color:'white', textDecoration: 'none'}}>cart</Link> <br/>                           
                            <Link to="/about" style={{color:'white', textDecoration: 'none'}} >About</Link> <br/>                           

                        </div>

                        <div className="col-4">
                            <h4><b>Contact</b></h4> <br/>
                            <FmdGoodOutlinedIcon/><p>Marathahalli - Sarjapur Outer Ring Rd, Devarabisanahalli, Bengaluru, Karnataka 560103</p>
                        </div>
                        
                    </div>
                </div>
                <br/>
            </Card>
        </div>
    );
}

export default Footer;