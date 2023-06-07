import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div>
      {/* PAGE CONTENT */}
      <div className="container">
        <div className="text-center">
          <img src="assets/img/logo.png" id="logoimg" alt=" Logo" />
        </div>
        <div className="tab-content">
          <div id="login" className="tab-pane active">
            <form action="/" className="form-signin">
              <p className="text-muted text-center btn-block btn btn-primary btn-rect">
                Enter your username and password
              </p>
              <input
                type="text"
                placeholder="Username"
                className="form-control"
              />
              <input
                type="password"
                placeholder="Password"
                className="form-control"
              />
              <button
                className="btn text-muted text-center btn-danger"
                type="submit" to="/"
              >
                Sign in
              </button>
            </form>
          </div>
          <div id="forgot" className="tab-pane">
            <form action="/" className="form-signin">
              <p className="text-muted text-center btn-block btn btn-primary btn-rect">
                Enter your valid e-mail
              </p>
              <input
                type="email"
                required="required"
                placeholder="Your E-mail"
                className="form-control"
              />
              <br />
              <button
                className="btn text-muted text-center btn-success"
                type="submit"
              >
                Recover Password
              </button>
            </form>
          </div>
          <div id="signup" className="tab-pane">
            <form action="/" className="form-signin">
              <p className="text-muted text-center btn-block btn btn-primary btn-rect">
                Please Fill Details To Register
              </p>
              <input
                type="text"
                placeholder="First Name"
                className="form-control"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-control"
              />
              <input
                type="text"
                placeholder="Username"
                className="form-control"
              />
              <input
                type="email"
                placeholder="Your E-mail"
                className="form-control"
              />
              <input
                type="password"
                placeholder="password"
                className="form-control"
              />
              <input
                type="password"
                placeholder="Re type password"
                className="form-control"
              />
              <button
                className="btn text-muted text-center btn-success"
                type="submit" to="/"
              >
                Register
              </button>
            </form>
          </div>
        </div>
        <div className="text-center">
          <ul className="list-inline">
            <li>
              <NavLink className="text-muted" to="#login" data-toggle="tab">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="text-muted" to="#forgot" data-toggle="tab">
                Forgot Password
              </NavLink>
            </li>
            <li>
              <NavLink className="text-muted" to="#signup" data-toggle="tab">
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Login;
