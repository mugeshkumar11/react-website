import React, { useContext } from 'react'
import "./header.css"
import { Link } from 'react-router-dom';
import {statecontext} from '../context/Context';

const Header = () => {
  const state = useContext(statecontext);
  console.log('state', state);



  
  return (
    <div>
      <section className={'nav'}>
        <section className={'container'}>
      <div className={'navbarflex'}>
      <div className={'navlogo'}>
       <Link to={"/header"}> <h2>TASKAPP</h2></Link>
      </div>
      <div className={'navbarlist'}>
        <ul>
        <Link to={"/Home"}><li>Home</li></Link>  
        <Link to={"/Addtask"}><li>Add-Task</li></Link>   
        </ul>
      </div>

      </div>
      </section>
      </section>
    </div>
  )
}

export default Header