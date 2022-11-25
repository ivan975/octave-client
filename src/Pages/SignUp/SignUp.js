import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import login from '../../assets/images/login.svg';
import useToken from '../../hooks/useToken';

const SignUp = () => {

    const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signupError, setSignupError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    if (token) {
        navigate('/');
    }

    const handleSignUp = data => {
        createUser(data.email, data.password)
            .then(res => {
                setSignupError('')
                const user = res.user;
                console.log(user);
                toast('user created successfully')
                navigate(from, { replace: true })
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(res => {
                        saveUsers(data.name, data.email);

                    })
                    .catch(err => console.error(err))
            })
            .catch(err => {
                console.error(err);
                setSignupError(err.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate(from, { replace: true })
                toast.success('Login Successful')
            })
            .catch(error => {
                console.error(error)
                setPasswordError(error.message)
            })
    }

    const saveUsers = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
            })
    }


    return (
        <div className='flex justify-center items-center'>
            <div>
                <img className='w-[450px] h-[400px]' src={login} alt="" />
            </div>
            <div className='mt-5 flex justify-center items-center'>
                <div className='w-96 p-7'>
                    <h2 className='text-center text-xl'>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text"{...register('name', {
                                required: 'Name is required'
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" {...register('email', {
                                required: 'Email is required'
                            })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password" {...register('password', {
                                required: 'Password is required',
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                            })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                            <label className="label"><span className="label-text">Forgot Password?</span></label>
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-primary rounded-sm mb-2 py-1">Option</label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>Seller</li>
                                </ul>
                            </div>                      </div>
                        <input className='btn btn-accent w-full max-w-xs' value='sign up' type="submit" />
                        {
                            signupError && <p className='text-red-600'>{signupError}</p>
                        }
                    </form>
                    <p>Already have an account? <Link className='text-secondary' to='/login'>Login</Link></p>
                    <div className="divider"></div>
                    <button onClick={handleGoogleSignIn} className='' aria-label="Log in with Google">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                </div>
            </div >
        </div >
    );
};

export default SignUp;