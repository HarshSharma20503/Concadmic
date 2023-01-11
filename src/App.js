import './App.css';
import Header from './Components/Header.js'
import {useState, useEffect} from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {Routes, Route, useNavigate} from "react-router-dom";
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import AddEditBlog from './Pages/AddEditBlog';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Auth from './Pages/Auth';
import Events from './Pages/Events';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';


function App() {

  const [active,setActive] = useState("home");
  const [user,setUser] = useState(null);
  
  const navigate = useNavigate();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        setUser(authUser);
      }else{
        setUser(null);
      }
    });
  },[]);

  const handleLogout = () =>{
    signOut(auth).then(()=>{
      setUser(null);
      setActive("login");
      navigate("/auth");
    })
  }

  return (
    <div className="App">
      <Header 
      setActive={setActive} 
      active={active} 
      user={user}
      handleLogout={handleLogout}
      />
      <ToastContainer position='top-center'/>
      <div className='middleSection'>
      <Routes>
        <Route path='/' element={<Home setActive={setActive} user={user}/>}/>
        <Route path='/detail/:id' element={<Detail setActive={setActive}/>}/>
        <Route path='/create' element={<AddEditBlog  user={user} />}/>
        <Route path='/update/:id' element={<AddEditBlog user={user} setActive={setActive}/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/auth' element={<Auth setActive={setActive} setUser={setUser}/>}/>
        <Route path='*' element={<NotFound setActive={setActive}/>}/>
      </Routes>
      </div>
    </div>
);
}

export default App;
