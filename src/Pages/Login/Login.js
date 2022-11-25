import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit = (e) => {
        const form = e.target;
        const email = form.email;
        const password = form.password;
        console.log(email, password);
        e.preventDefault()


    }
    return (
        <div>
            <h1 className='text-center text-3xl'>Please Login</h1>
            <div className="w-1/2 mx-auto bg-base-200 my-5">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control my-5">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p>Create an account <Link to='/signup' className='text-bold text-blue-500'>Sign-Up</Link></p>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>

                    </form>
                </div>


            </div>

        </div>
    );
};

export default Login;