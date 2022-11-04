import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import {statecontext} from '../context/Context';
import { useContext } from 'react';


const Home = () => {

  const state = useContext(statecontext);
  console.log('state', state);


  return (
    <div className={'homecont'}>
       <section className={'homenav'}>
        <section className={'container'}>
      <div className={'homenavbarflex'}>
      <div className={'homenavlogo'}>
       <Link to={"/header"}> <h2>TASKAPP</h2></Link>
      </div>
      <div className={'tasklistbtn'}>
        <button>Tasklist</button>
      </div>
      </div>
      </section>
      </section>
    
      <section className={'homedetails'}>
        <section className={'container'}>
          <div className={'homeflex'}>
           <div className={'homebtn'}>
            <h3>Delete/Edit:</h3>
           <button>Delete</button>
           <button>Edit</button>
           </div>
           <div className={'homemark'}>
            <h3>Mark as completion:</h3>
            <h3>Yes</h3>
            <input type={"checkbox"}  name={"yes"}/>
            <h3>No</h3>
            <input type={"checkbox"}  name={"yes"}/>
           </div>
           <div className={'homedate'}>
            <h3>Date:</h3>
            <input type={"date"}/>
           </div>
           <div className={'homefil'}>
            <h3>Filter option:</h3>
            <h3>decending</h3>
            <input type={"checkbox"} name={"yes"}/>
            <h3>asecending</h3>
            <input type={"checkbox"} name={"yes"}/>
           </div>
           <div className={'homepri'}>
            <h3>Prioritize:</h3>
            <h3>Yes</h3>
            <input type={"checkbox"}  name={"yes"}/>
            <h3>No</h3>
            <input type={"checkbox"}  name={"yes"}/>
           </div>
          </div>
        </section>
      </section>
      <h1>{state?.event}</h1>
    </div>
  )
}

export default Home