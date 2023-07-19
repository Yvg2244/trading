import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerFullName, setRegisterFullName] = useState("");
  const [registerUserName, setRegisterUserName] = useState("");
  const [loginError, setLoginError] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [registration, setRegistration] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegister = () => {
    // console.log(registerFullName,registerEmail,registerPassword,registerUserName)
    fetch("http://localhost:5000/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: registerEmail,
        Username: registerUserName,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
      (res.emailExists)?setEmailError(true):setEmailError(false);
      (res.usernameExists)?setUsernameError(true):setUsernameError(false);
          if(!emailError&& !usernameError) {
          fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ FullName:registerFullName, email:registerEmail, password:registerPassword, Username:registerUserName }),
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res, "userRegister");
              setRegisterEmail("")
              setRegisterFullName("")
              setRegisterPassword("")
              setRegisterUserName("")
              setRegistration(true);
            })
            .catch((error) => {
              console.error("Registration failed:", error);
              setRegistration(false);
            });
        }
      })
      .catch((error) => {
        console.error("Error checking email and username:", error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginEmail, loginPassword);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        if (data.status === "ok") {
          window.localStorage.setItem("token", data.token);
          window.localStorage.setItem("email", data.email);
          window.localStorage.setItem("userdata", JSON.stringify(data.data));

          setIsLoggedIn(true);
        } else {
          setError("Invalid email or password");
        }
      })
      .catch((loginError) => {
        setLoginError("An error occurred during login");
      });
  };

  const handleLogout = () => {
    // Clear token from local storage
    console.log("first");
    window.localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div className="navbar fixed top-0 z-10 bg-base-100">
      <div className="navbar-start">
        {/* small screen menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Paper Trading</Link>
            </li>
            <li>
              <Link to="/marketplace">Market Place</Link>
            </li>
            <li>
              <Link to="/marketplace">Trading</Link>
            </li>
          </ul>
        </div>
        {/* heading */}
        <a className="btn btn-ghost normal-case text-xl">
          Instacorp Securities
        </a>
      </div>
      {/* large screen navbar */}
      {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 px-1">
          <li>
            <Link to="/">Paper Trading</Link>
          </li>
          <li>
            <Link to="/marketplace">Market Place</Link>
          </li>
          <li>
            <Link to="/marketplace">Trading</Link>
          </li>
        </ul>
      </div> */}

      {/* Login/Register Modal */}
      <div className="navbar-end">
        {isLoggedIn ? (
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="btn" onClick={() => window.loginModal.showModal()}>
            Login
          </button>
        )}

        {/* login model`` */}
        <dialog id="loginModal" className="modal ">
          {isLoggedIn ? (
            <form method="dialog" className="modal-box flex flex-col gap-2">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <h4 className="font-bold my-4 flex flex-col text-md">
                Login Successful
              </h4>
            </form>
          ) : (
            <form method="dialog" className="modal-box flex flex-col gap-2">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <h4 className="font-bold my-4 flex flex-col text-md">Login</h4>
              <label className="label">
                <span className="label-text text-md font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text text-md font-bold">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                }}
                className="input input-bordered w-full max-w-xs"
              />
              <Link onClick={handleLogin} className="btn w-full ">
                Sign In
              </Link>
              <p>Don't have a account?</p>
              <a
                onClick={() => window.registerModal.showModal()}
                className="btn w-full "
              >
                Register
              </a>
              {/* register model */}
              <dialog id="registerModal" className="modal ">
               {registration?<form method="dialog" className="modal-box flex flex-col gap-2">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <h4 className="font-bold my-4 flex flex-col text-md">
                Registration Successful. Kindly Login aggain
              </h4>
            </form>:<form method="dialog" className="modal-box  ">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                  <h4 className="font-bold my-4 flex flex-col text-md">
                    Register
                  </h4>
                  <label className="label">
                    <span className="label-text text-md font-bold">
                      Full Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    onChange={(e) => {
                      setRegisterFullName(e.target.value);
                    }}
                    className="input input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text text-md font-bold">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    onChange={(e) => {
                      setRegisterEmail(e.target.value);
                    }}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {(emailError)?<span className="text-red-600 text-sm">Email already exists</span>:<></>}

                  <label className="label">
                    <span className="label-text text-md font-bold">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    onChange={(e) => {
                      setRegisterPassword(e.target.value);
                    }}
                    placeholder="Enter your password"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text text-md font-bold">
                      Username
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => {
                      setRegisterUserName(e.target.value);
                    }}
                  />
                  {(usernameError)?<span className="text-red-600 text-sm">Username already exists</span>:<></>}

                  <a className="btn w-full my-4" onClick={handleRegister}>
                    Register
                  </a>
                  <p>Already have a account?</p>
                  <button className="btn my-4 w-full">Sign In</button>
                </form>}
                
              </dialog>
            </form>
          )}
        </dialog>
      </div>
    </div>
  );
};

export default Navbar;
