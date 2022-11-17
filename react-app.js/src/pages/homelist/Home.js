import React, { useState } from 'react';
import './home.css';
import { createSearchParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import {statecontext} from '../context/Context';
import { useContext } from 'react';
import {Checkbox, FormControlLabel, ToggleButton} from '@mui/material';
import Addtask from '../task/Addtask';
import {Button} from '@mui/material'

const Home = () => {
 
  const {state,dispatch} = useContext(statecontext);
  console.log('state', state);

   const navigate = useNavigate();

   const listitems = () =>{
    navigate("/Addtask")
   }
  
   const deleteitems = (id) =>{
   
    dispatch({type:"deltask", payload:id})
   }
   const handleascend = () =>{
   let sort = state.event.sort((a, b) => a.textform < b.textform ? -1:1);
   
   dispatch ({type:"ascend", payload:sort})
   }


   const handledecend = () =>{
    let sort = state.event.sort((a, b) => b.textform < a.textform ? -1:1);
   
    dispatch ({type:"decend", payload:sort})
  }

  const handlefilter = () =>{
    let prioritize = state.event.filter((item) => {

      if(item.prioritize===true || item.prioritize===false){
        return item.prioritize
       
      }else{
        return 
      } 
         
    })
    dispatch({type:"filitem", payload:prioritize })
  }
   const edititems = (id) =>{
    navigate({
      pathname:"/addtask",
      search:createSearchParams({
         id:id
      }).toString()
    })
   }
  
   const handlecomplete = (index) =>{
   //console.log("item",index);
   let temp =[...state.event];
   
    const data = temp?.map((Obj,i)=>{
      if(i===index){
        return{
          ...Obj,
          complete:!Obj.complete
        }
      }else return Obj
    })
    // temp[index].complete = !item.complete;
     dispatch({type:"Addtask",payload:data});
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
      <Button variant="contained" onClick={()=>handleascend()}>Ascending</Button>
      <Button variant="contained" onClick={()=>handledecend()}>Decending</Button>
      <Button variant="contained"onClick={()=>handlefilter()}>Filter</Button>
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
          <h6>{item.datefun}</h6>
          <FormControlLabel control={<Checkbox checked={item.complete} />} label="complete"  onChange={()=>handlecomplete(index) } color="secondary" />
          <FormControlLabel control={<Checkbox checked={item.prioritize} />} label="prioritize"  color="secondary" />
      <section className={'homedetails'}>
      <section className={'container'}>
        <div className={'homeflex'}>
         <div className={'homebtn'}>
         
         <Button variant="contained" color="error" onClick={() => deleteitems(item.id)}>
         Delete
         </Button>
         <Button variant="contained" color="success"  onClick={() => edititems(item.id)}>
         Edit
        </Button>
         
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