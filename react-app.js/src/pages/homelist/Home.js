import React, { useState } from 'react';
import './home.css';
import { createSearchParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import {statecontext} from '../context/Context';
import { useContext } from 'react';
import {Checkbox, FormControlLabel} from '@mui/material';
import Addtask from '../task/Addtask';
import {Button} from '@mui/material'

const Home = () => {
  const [prioritize,setprioritize] = useState(false);
  const {state,dispatch} = useContext(statecontext);
  console.log('state', state);

   const navigate = useNavigate();

   const listitems = () =>{
    navigate("/Addtask")
   }
  
   const deleteitems = (id) =>{
   
    dispatch({type:"deltask", payload:id})
   }
   const edititems = (id) =>{
    navigate({
      pathname:"/addtask",
      search:createSearchParams({
         id:id
      }).toString()
    })
   }
  
   const handlecomplete = (item, index) =>{
   
   let temp =[...state.event];
    console.log("item", index,index.complete,temp[index].complete);
    const data = temp?.map((Obj,i)=>{
      if(i===index){
        return{
          ...Obj,
          complete:!Obj.complete
        }
      }else return Obj
    })
    // temp[index].complete = !item.complete;
     dispatch(Addtask(data));
   }

  return (
    <div className={'homecont'}>
       <section className={'homenav'}>
        <section className={'container'}>
      <div className={'homenavbarflex'}>
      <div className={'homenavlogo'}>
       <Link to={"/header"}> <h2>TASKAPP</h2></Link>
      </div>
      <div className={'tasklistbtn'}>
        <Button variant="contained"  onClick={() => listitems()}>Addtask</Button>
      </div>
      </div>
      </section>
      </section>
    {/* {state.event?.map((item,index)=> <p key={index}>{item. textform}{item. descripe}</p>)} */}
    {state.event?.map((item,index)=>{
     return(
      <div key={index} className='user'>
          <h3>{item. textform}</h3>
          <h5>{item. descripe}</h5>
          <FormControlLabel control={<Checkbox Checked={item.complete} />} label="complete"  onChange={()=>handlecomplete(item,index) }/>
          <FormControlLabel control={<Checkbox Checked={prioritize} />} label="prioritize"  onChange={()=> setprioritize(!prioritize)}/>
      <section className={'homedetails'}>
      <section className={'container'}>
        <div className={'homeflex'}>
         <div className={'homebtn'}>
         <button onClick={() => deleteitems(item.id)}>Delete</button>
         <button onClick={() => edititems(item.id)}>Edit</button>
         </div>
         {/* <div className={'homemark'}> */}
          {/* <input type={"checkbox"}  onChange={()=>checkeditem (item.id)}/> */}
         {/* </div> */}
        </div>
      </section>
    </section>
</div>
    
     )
      } )}
     
      
    
     
    </div>
  )
}

export default Home