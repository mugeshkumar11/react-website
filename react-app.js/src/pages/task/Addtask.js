import React from "react";
import "./addtask.css"
import { Link } from "react-router-dom";

const Addtask = () => {
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
              <input type={'text'} placeholder={"taskname"}/>
              </div>
              <div className={"taskdesc"}>
               <h3>Enter the description:</h3>
               <input type={"textarea"} placeholder={"Message..."}/>
              </div>
              <div className={"taskpri"}>
                <h3>Enter the prioritize:</h3>
                <h3>Yes</h3>
                <input type={"checkbox"}/>
                <h3>No</h3>
                <input type={"checkbox"}/>
              </div>
              <div className={"tskcomp"}>
              <h3>Enter the completed:</h3>
                <h3>Yes</h3>
                <input type={"checkbox"}/>
                <h3>No</h3>
                <input type={"checkbox"}/>
              </div>
              <div className={"taskbtn"}>
                <input type={"submit"}/>
              </div>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Addtask;
