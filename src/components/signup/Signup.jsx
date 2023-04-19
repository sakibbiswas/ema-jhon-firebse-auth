import React, { useContext, useState } from 'react';
import "./Signup.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authprovider';
const Signup = () => {
    const [error, seterror] = useState('')
    const { createuser, } = useContext(AuthContext)
    const handelsiginup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        seterror('')
        if (password !== confirm) {
            return seterror('your password didnot match')
        }
        else if (password.length < 6) {
            return seterror('password must be 6 character')
        }
        createuser(email, password)
            .then(result => {
                const loogeduser = result.user;
                console.log(loogeduser);
                form.reset()
            })
            .catch(error => {
                console.log(error);
                seterror(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelsiginup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Create Password</span>
                            </label>
                            <input type="password" name='confirm' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p><small>Already have an account?</small><Link to="/login">Login</Link>  </p>
                            </label>
                            <p className='text-orange-600'>{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                        <button className="btn "> Continue with Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;