import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Login from './pages/login page/Login';
import Header from './pages/header/Header';
import Addtask from './pages/task/Addtask';
import Home from './pages/homelist/Home';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
    <Routes>
        <Route path= "/" element={<Login/>}></Route>
        <Route path= "Header" element={<Header/>}></Route>
        <Route path= "Addtask" element={<Addtask/>}></Route>
        <Route path='home' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
