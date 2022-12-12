import React from "react";
import "./addtask.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState, useContext } from "react";
import { statecontext } from "../context/Context";
import { TextField, Button, FormControlLabel,Checkbox} from "@mui/material";


function Addtask() {
  const { state, dispatch } = useContext(statecontext);
  console.log("statecontext", state.event);

  const [param] = useSearchParams();
  const navigate = useNavigate();
  const id = parseInt(param.get("id"));

  let getid = state.event.findIndex((item) => item.id === id);

  const [text, settext] = useState(state.event[getid]?.textform || "");
  const [des, setdes] = useState(state.event[getid]?.descripe || "");
  const [selectedDate, setSelectedDate] = useState(state.event[getid]?.datefun||"");
  const [prioritize,setprioritize] = useState(false);

  const handletext = (val) => {
    settext(val.target.value);
  };

  const handledesc = (val) => {
    setdes(val.target.value);
  };

  const handlesum = (values) => {
    values.preventDefault();
    if (id) {
      const temp = {
        id: id,
        textform: text,
        descripe: des,
        datefun: selectedDate,
      };
      // console.log(temp);
      dispatch({ type: "update", payload: temp });
      settext("");
      setdes("");
      setSelectedDate("");
      navigate("/Home");
    } else {
      const temp = {
        id: state.event.length + 1,
        textform: text,
        descripe: des,
        datefun: selectedDate,
        prioritize,
        complete: false,
      };
      dispatch({ type: "setevent", payload: [...state.event, temp] });
      settext("");
      setdes("");
      setSelectedDate("");
      //console.log(temp);
    }
  };
  const handleDateChange = (date) => {
    setSelectedDate(date.target.value);
  };

  return (
    <div className="addta">
      <section className={"adnav"}>
        <section className={"container"}>
          <div className={"adnavbarflex"}>
            <div className={"adnavlogo"}>
              <Link to={"/header"}>
                {/* {" "} */}
                <h2>TASKAPP</h2>
              </Link>
            </div>
          </div>
        </section>
      </section>
      
      <section className={"addtask"}>
        <section className={"container"}>
          <div className={"addflex"}>
            <form >
              <div className={"title"}>
                <TextField style={{backgroundColor: "#fff"}}
                  id="outlined-basic"
                  label="Add task"
                  variant="outlined"
                  value={text}
                  placeholder={"taskname"}
                  onChange={handletext}
                />
              </div>
              <div className={"taskdesc"}>
                <TextField style={{backgroundColor: "#fff"}}
                  id="outlined-basic"
                  label="Add description"
                  variant="outlined"
                  value={des}
                  placeholder={"Message..."}
                  onChange={handledesc}
                />
              </div>
              <div className="task date">
                <TextField style={{backgroundColor: "#fff"}}
                  id="date"
                  label="Date"
                  type="date"
                  value={selectedDate}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleDateChange}
                />
              </div>
              <span> <FormControlLabel control={<Checkbox checked={prioritize} />} label="prioritize" style={{color:"block"}} onChange={()=> setprioritize(!prioritize)} color="secondary" /></span>
              <div className={"taskbtn"}>
                <Button
                  variant="contained"
                  onClick={(values) => handlesum(values)}
                >
                  submit
                </Button>
                <Link to={"/Home"}>
                 <Button variant="contained">Home page</Button>
               </Link>
              </div>
             
            </form>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Addtask;
