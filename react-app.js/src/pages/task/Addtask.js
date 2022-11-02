import React from "react";
import "./addtask.css"
import { Link } from "react-router-dom";
import { useState } from "react";

function Addtask() {
  const [text, settext] = useState('');
  const [des, setdes] = useState('');
  const [event, setevent] = useState([]);
 

  const handletext = (val) => {
    settext(val.target.value);
  };

  const handledesc = (val) => {
    setdes(val.target.value);
  };
 

  const handlesum = (val) => {
    val.preventDefault();
    
    const temp = {
      text,
      des,
    };
   
    setevent ([...event, temp]);
    
    console.log("state", temp);

  };
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

      <section className={"addtask"}>
        <section className={"container"}>
          <div className={"addflex"}>
            <form>
              <div className={"title"}>
                <h3>Enter task name:</h3>
                <input  placeholder={"taskname"} onChange={handletext} />
              </div>
              <div className={"taskdesc"}>
                <h3>Enter the description:</h3>
                <textarea  placeholder={"Message..."} onChange={handledesc} />
              </div>
              <div className={"taskbtn"}>
                <button onClick={(val) => handlesum(val)}>submit</button>
              </div>
            </form>
            {event?.map((item , index) =><p key={index}>{item.text}</p>)}
          </div>
        </section>
      </section>
    </div>
  );
}

export default Addtask;
