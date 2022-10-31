import React from "react";
import "./Login.css";


const Login = () => {
  return (
    <div>
      <section className={"loginform"}>
        <section className={"container"}>
          <div className={"loginflex"}>
            <h1>Login</h1>
            <form>
              <div className={"input"}>
                <label for="username">Username</label>
                <input type={"text"} placeholder={"Username"} />
              </div>

              <div className={"input"}>
                <label for="password">Password</label>
                <input type={"text"} placeholder={"Password"} />
              </div>
              <div className={"btn"}>
              <button>Submit</button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Login;
