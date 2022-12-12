
import './App.css';
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import Login from './pages/login page/Login';
import Header from './pages/header/Header';
import Addtask from './pages/task/Addtask';
import Home from './pages/homelist/Home';
import {statecontext} from './pages/context/Context.js';
import { useReducer } from 'react';
import {stateReducer} from "./pages/context/Reduce";



function App() {
  const [state, dispatch] = useReducer(stateReducer, {event:[]} )
  console.log("statereduce", state,dispatch);
  

 
  return (
    <statecontext.Provider value={{state, dispatch}}>
    <div className="App">
      {state.Authenticated ? (
        <BrowserRouter>
    <Routes>
        <Route path= "/" element={<Header/>}></Route>
        <Route path= "Home" element={<Home/>}></Route> 
        <Route path= "Addtask" element={<Addtask/>}></Route>
        <Route path='*' element={<Navigate to={"/"}/>}></Route>
       
    </Routes>
    </BrowserRouter>):(

    <BrowserRouter>
    <Routes>
        <Route path= "Login" element={<Login/>}></Route>
        <Route path='*' element={<Navigate to={"/Login"}/>}></Route>
        
       
        {/* <Route path='home' element={<Home/>}></Route> */}
    </Routes>
    </BrowserRouter>
    )
}
    </div>
    </statecontext.Provider>
   
  );
}

export default App;
