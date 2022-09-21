import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from '@mui/joy/Card';
import {Link} from 'react-router-dom';
import Alert from '@mui/material/Alert';
import {useNavigate} from 'react-router-dom';


function Register() {


    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [regRes, setRegRes] = React.useState(false);
    const [msg, setMsg ] = React.useState('');
    const [msgClass, setMsgClass ] = React.useState('');


    const RegisterAlertMsg = ()=> {
        return( 
          <div>
            <Alert severity={msgClass}>{msg}</Alert><br/>
          </div>
        );
      };

    

    const register = (e) =>{
      
        e.preventDefault();
  
        const user = {name, email, password };
  
          fetch('http://localhost:8083/ShoppingBackEnd/register', {
  
              method:'POST',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify(user)
  
          })
          .then( response => response.json())
          .then(data => {
  
            console.log(data);
  
            if( data.error ){ 
  
              setMsg(data.error);
              setMsgClass("error");
              setRegRes(true);
            }
            else{  
              setMsg("User register succefully. Go to Login");
              setMsgClass("success");
              setRegRes(true);
            }          
  
          });
  
      }






  return (
    <React.Fragment>
        <div  className='container'>
            <div className='row'>
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <br/><br/><br/>
                    <h1 className='d-flex justify-content-center'>Register</h1><br/>
                    { regRes? <RegisterAlertMsg/> :null}

                    <Card >
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" required   placeholder="name@example.com"   onChange={ (e) => setName(e.target.value)}/>
                                <label for="floatingInput">Name</label>
                            </div>                            
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" required   placeholder="name@example.com"   onChange={ (e) => setEmail(e.target.value)} />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" required minLength={6} placeholder="Password"   onChange={ (e) => setPassword(e.target.value)} />
                                <label for="floatingPassword">Password</label>
                            </div><br/>
                            <p>Have account? Go to <Link to='/login' >Login</Link></p><br/>
                            <Button  value="Register" className='btn btn-primary btn-lg btn-block' onClick={register}>Register</Button>
                    </Card>
                </div>
                <div className="col-sm-4"></div>                
            </div>
        </div>
    </React.Fragment>
  );
}

export default Register;