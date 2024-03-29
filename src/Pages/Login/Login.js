import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/ContextProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [signInError, setSignInError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(loginUserEmail);
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, token]);
  const googleSign = () => {
    googleSignIn(provider)
      .then((result) => {
        const user = result.user;
        saveUser(user.displayName, user.email);
        toast.success("logged in");
      })
      .catch((er) => {
        console.log(er);
        setSignInError(er.message);
      });
  };
  const handleSubmit = (e) => {
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    e.preventDefault();

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setLoginUserEmail(email);
        form.reset();
        toast.success("logged in");
      })
      .catch((er) => {
        console.log(er);
        setSignInError(er.message);
      });
  };
  const saveUser = (name, email) => {
    const user = { name, email, role: "buyer" };
    fetch("https://old-shop-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoginUserEmail(email);
      });
  };
  return (
    <div className="my-10">
      <div className="md:w-1/3 w-full mx-auto bg-base-200 my-5 border-2 border-gray-200 rounded-xl">
        <div className="card flex-shrink-0 w-full bg-base-100 shadow-md">
          <h1 className="text-center text-3xl font-semibold pt-2">Login</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="zahid@gmail.com"
                className="input input-bordered"
              />
            </div>
            <div className="form-control my-5">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="********"
                className="input input-bordered"
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text font-medium-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>

            <div>
              {signInError ? <p className="text-red-500">{signInError}</p> : ""}
            </div>
            <div className="w-full">
              <button
                onClick={googleSign}
                type="button"
                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                <svg
                  class="mr-2 -ml-1 w-4 h-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                Sign in with Google
              </button>
            </div>

            <div className="form-control mt-6 flex md:flex-row items-center  justify-between gap-5">
              <input
                className="btn btn-outline btn-primary text-white w-full"
                type="submit"
                value="Login"
              />
            </div>
            <p className="text-center">
              Create an account{" "}
              <Link to="/buyerSignUp" className="text-bold text-blue-500">
                Sign-Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
