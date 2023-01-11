import './App.css';
import Header from './Components/Header.js'
import {useState, useEffect} from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import AddEditBlog from './Pages/AddEditBlog';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Auth from './Pages/Auth';
import Events from './Pages/Events';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/> 
        <ToastContainer position='top-center'/>
        <div className="middleSection">
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/create' element={<AddEditBlog/>}/>
          <Route path='/update/:id' element={<AddEditBlog/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/auth' element={<Auth />}/>
          <Route path='*' element={<NotFound />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
