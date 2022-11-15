import React from "react";
import "./addtask.css"
import { Link,Navigate,useNavigate,useSearchParams } from "react-router-dom";
import { useState,useContext } from "react";
import {statecontext} from '../context/Context';
import {TextField,Button} from '@mui/material'

function Addtask() {
  
  const {state, dispatch} = useContext(statecontext)
  console.log("statecontext",state.event);

  const[param] = useSearchParams();
  const navigate = useNavigate()
  const id = parseInt(param.get("id"))

  let getid = state.event.findIndex(item=>item.id===id)


  const [text, settext] = useState(state.event[getid]?.textform || "");
  const [des, setdes] = useState(state.event[getid]?.descripe || "");
  const [event, setevent] = useState([]);
 




  const handletext = (val) => {
    settext(val.target.value);
  };

  const handledesc = (val) => {
    setdes(val.target.value);
  };
 

  const handlesum = (values) => {
    values.preventDefault();
   if(id){
    const temp = {
      id:id,
      textform:text,
      descripe:des,
      complete:false,
      prioritize:false,
    };
   // console.log(temp);
    dispatch({type:"update",payload:temp});
    settext('')
    setdes('')
    navigate("/Home")
   }
   else{
    const temp = {
      id:state.event.length+1,
      textform:text,
      descripe:des,
      prioritize:false,
      complete:false
    }  
     dispatch({type:"setevent", payload:[...state.event, temp]});
    settext('');
    setdes('');
    //console.log(temp);

   };
  }

  
  return (
   
    <div className="addta">
      <section className={'adnav'}>
        <section className={'container'}>
          <div className={'adnavbarflex'}>
            <div className={'adnavlogo'}>
              <Link to={"/header"}> <h2>TASKAPP</h2></Link>
            </div>
          </div>
        </section>
      </section>
      <Link to={'/Home'}><Button variant="contained">Home page</Button></Link>
      <section className={"addtask"}>
        <section className={"container"}>
          <div className={"addflex"}>
            <form>
              <div className={"title"}>
                
                <TextField id="outlined-basic" label="Add task" variant="outlined" value={text} placeholder={"taskname"} onChange={handletext}/>
              </div>
              <div className={"taskdesc"}>
               
                <TextField id="outlined-basic" label="Add description" variant="outlined"value={des}  placeholder={"Message..."} onChange={handledesc} />
              </div>
              <div className={"taskbtn"}>
                
                <Button variant="contained" onClick={(values) => handlesum(values)}>submit</Button>
                
              </div>
            </form>
           
          </div>
        </section>
      </section>
    </div>
  );


}

export default Addtask;
