import React, { useState } from "react";
import "./home.css";
import { createSearchParams, Link, useNavigate} from "react-router-dom";
import { statecontext } from "../context/Context";
import { useContext} from "react";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Home = () => {
  const { state, dispatch } = useContext(statecontext);
  console.log("state", state);
  const [searchqry, setsearchqry] = useState("");
  const navigate = useNavigate();

  const listitems = () => {
    navigate("/Addtask");
  };

  const deleteitems = (id) => {
    dispatch({ type: "deltask", payload: id });
  };
  const handleascend = () => {
    let sort = state.event.sort((a, b) => (a.textform < b.textform ? -1 : 1));

    dispatch({ type: "ascend", payload: sort });
  };

  const handledecend = () => {
    let sort = state.event.sort((a, b) => (b.textform < a.textform ? -1 : 1));

    dispatch({ type: "decend", payload: sort });
  };

  const handlefilter = () => {
    let prioritize = state.event.filter((item) => {
      const prior = item.prioritize;
      if(prior === true){
        return item;
      }else {
        return prior
      }
     
    });
    dispatch({ type: "filitem", payload: prioritize });
  };
  const edititems = (id) => {
    navigate({
      pathname: "/addtask",
      search: createSearchParams({
        id: id,
      }).toString(),
    });
  };

  const handlecomplete = (index) => {
    //console.log("item",index);
    let temp = [...state.event];

    const data = temp?.map((Obj, i) => {
      if (i === index) {
        return {
          ...Obj,
          complete: !Obj.complete,
        };
      } else return Obj;
    });
    // temp[index].complete = !item.complete;
    dispatch({ type: "Addtask", payload: data });
  };

 
  

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <div className={"homecont"}>
      <section className={"homenav"}>
        <section className={"container"}>
          <div className={"homenavbarflex"}>
            <div className={"homenavlogo"}>
              <Link to={"/header"}>
                {" "}
                <h2>TASKAPP</h2>
              </Link>
            </div>
            <div className={"tasklistbtn"}>
              <TextField
                style={{ backgroundColor: "#fff" }}
                id="filled-search"
                label="Search field"
                value={searchqry}
                type="search"
                variant="filled"
                onChange={(eve) => setsearchqry(eve.target.value)}
              />
              <Button variant="contained" onClick={() => handleascend()}>
                Ascending
              </Button>
              <Button variant="contained" onClick={() => handledecend()}>
                Decending
              </Button>
              <Button variant="contained" onClick={() => handlefilter()}>
                Filter
              </Button>
              <Button variant="contained" onClick={() => listitems()}>
                Addtask
              </Button>
            </div>
          </div>
        </section>
      </section>
     
     {state.event?.filter((val)=>{ 
    if(searchqry===""){
      return val;
    }else if(
     
       val.textform.toLowerCase().includes(searchqry.toLowerCase())
    ){
  return val;
    }
     }).map((item, index) => {
        return (
          <div key={index} className="user" style={{ display: "inline-block" }}>
            <section className={"container"}>
              <div className={"homeflex"} style={{ textAlign: "left" }}>
                <Card style={{ marginBottom: "30px" }}>
                  <CardContent style={{ width: "300px" }}>
                    <Typography variant="h5" component="div">
                      {item.textform}
                      <br />
                      {item.descripe}
                      <br />
                      {item.datefun}
                      <br />
                      <FormControlLabel
                        control={<Checkbox checked={item.complete} />}
                        label="complete"
                        onChange={() => handlecomplete(index)}
                        color="secondary"
                      />

                      <FormControlLabel
                        control={<Checkbox checked={item.prioritize} />}
                        label="prioritize"
                        color="secondary"
                        
                      />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => deleteitems(item.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => edititems(item.id)}
                    >
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
