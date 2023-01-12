// components imported from packages
import React, {useState} from 'react'
import { toast} from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

// CSS components
import "react-toastify/dist/ReactToastify.css";
import './Pages.scss'

// components imported from custom files
import {auth, db} from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

const initalState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const regex1 = /@mail\./;
const regex2 = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function Auth({setActive, setUser}) {
  const [state, setState] = useState(initalState);
  const [signUp, setSignUp ] = useState(false);

  const {firstName, lastName, email, password, confirmPassword} = state;

  const navigate = useNavigate();

  const handleChange = (event) =>{
    setState({...state, [event.target.name]:event.target.value});
  };

  const handleAuth = async (event) =>{
    event.preventDefault();
    if(!signUp){
      if(email && password){
        const {user} = await signInWithEmailAndPassword(auth,email,password);
        setUser(user);
        toast.info("Loged in Successfully");
        setActive("home");
      }
      else{
        return toast.error("All fields are mandatory to fill");
      }
    } else {
      if(password !== confirmPassword){
        return toast.error("Password Don't Match");
      }
      if(!(regex1.test(email))){
        return toast.error('Enter College Email-ID (Should have @mail in it)');
      }
      if(!(regex2.test(password))){
        return toast.error('Password should have :-Minimum 8 length and Atleast 1 special,uppercase,digit');
      }
      if(firstName && lastName && email && password){
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user, { displayName: `${state.firstName} ${state.lastName}` });
        
        const displayName = firstName+" "+lastName;
        try{
          await setDoc(doc(db,"users",user.uid),{
            uid:user.uid,
            displayName,
            email
          });
          await setDoc(doc(db, "userChats", user.uid), {});
        }catch(err){
          console.log(err);
        }
        
        toast.info("Signed Up Successfully");
        setActive("home");
      }
      else{
        return toast.error("All fields are mandatory to fill");
      }
    }
    navigate("/");
  }


  return (
    
    <div className="container-fluid mb-4">
        <div className="container">
          <div className="col-12 text-center">
            <div className="text-center heading py-2">
              {!signUp ? "Login" : "Sign Up"}
            </div>
          </div>
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-10 col-md-8 col-lg-6">
              <form className='row' onSubmit={handleAuth}>
                {signUp && (
                  <>
                  <div className="col-6 py-3">
                    <input type="text" className='form-control input-text-box' placeholder='First Name' name='firstName' value={firstName} onChange={handleChange}/>
                  </div>
                  <div className="col-6 py-3">
                    <input type="text" className='form-control input-text-box' placeholder='Last Name' name='lastName' value={lastName} onChange={handleChange}/>
                  </div>
                  </>
                )}
                <div className="col-12 py-3">
                  <input type="email" className='form-control input-text-box' placeholder='Email' name='email' value={email} onChange={handleChange}/>
                </div>
                <div className="col-12 py-3">
                  <input type="password" className='form-control input-text-box' placeholder='Password' name='password' value={password} onChange={handleChange}/>
                </div>
                {signUp && (
                  <div className="col-12 py-3">
                    <input type="password" className='form-control input-text-box' placeholder='Confirm Password' name='confirmPassword' value={confirmPassword} onChange={handleChange}/>
                  </div>
                )}
                
                <div className="col-12 py-3 text-center">
                  <button className={`btn ${!signUp ? "btn-sign-in" : "btn-sign-up"}`} type="submit">
                    {!signUp ? "Login" : "Sign Up"}
                  </button>
                </div>
              </form>
              <div>
                {!signUp ? (
                  <>
                  <div className="text-center justify-content-center mt-2 pt-2">
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account ?
                      <span style={{textDecoration: "none", cursor: "pointer", color: "#F88379"}}
                      onClick={() => {setSignUp(true);setState(initalState);}}
                      >
                        {" "}Sign Up
                      </span>
                    </p>
                  </div>
                  </>
                ) : (
                  <>
                  <div className="text-center justify-content-center mt-2 pt-2">
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Already have an account ?
                      <span style={{textDecoration: "none", cursor: "pointer", color: "#298af2"}}
                      onClick={() => {setSignUp(false);setState(initalState);}}
                      >
                        {" "}Login
                      </span>
                    </p>
                  </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Auth