import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Welcome</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            mollitia tempore harum voluptatem dolore officia maiores enim, aut
            modi rem dolores, impedit deserunt? Non omnis ipsam quam vero nulla!
          </p>
          <span>Do you have an account ?</span>
          <Link to={"/login"}>
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
