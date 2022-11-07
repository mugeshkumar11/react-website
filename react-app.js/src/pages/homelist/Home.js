import React from 'react';
import './home.css';
import { createSearchParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import {statecontext} from '../context/Context';
import { useContext } from 'react';


const Home = () => {
  
  const {state,dispatch} = useContext(statecontext);
  console.log('state', state);

   const navigate = useNavigate();

   const listitems = () =>{
    navigate("/Addtask")
   }
  //  const checkeditem = (check) => {
  //     dispatch({type:'default',payload:check})
  //  }
  //  const deleteitems = (check) =>{
   
  //   dispatch({type:"deltask", payload:check})
  //  }
  //  const edititems = (check) =>{
  //   navigate({
  //     pathname:"/addtask",
  //     search:createSearchParams({
  //       check:check
  //     }).toString()
  //   })
  //  }

  return (
    <div className={'homecont'}>
       <section className={'homenav'}>
        <section className={'container'}>
      <div className={'homenavbarflex'}>
      <div className={'homenavlogo'}>
       <Link to={"/header"}> <h2>TASKAPP</h2></Link>
      </div>
      <div className={'tasklistbtn'}>
        <button onClick={() => listitems()}>Tasklist</button>
      </div>
      </div>
      </section>
      </section>
    {state.event?.map((item,index)=>{
      return(
        <div>
        <p key={index}>{item.text}{item.des}</p>


        <section className={'homedetails'}>
        <section className={'container'}>
          <div className={'homeflex'}>
           <div className={'homebtn'}>
           <button onClick={(check) => deleteitems(check)}>Delete</button>
           <button onClick={(check) => edititems(check)}>Edit</button>
           </div>
           <div className={'homemark'}>
            <h3>Mark as completion:</h3>
            <input type={"checkbox"}  onChange={(check)=>checkeditem (check)}/>
           </div>
          </div>
        </section>
      </section>
</div>
      )
    })}
     
    </div>
  )
}

export default Home