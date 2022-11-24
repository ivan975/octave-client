import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import login from '../../assets/images/login.svg';

const SignUp = () => {

    // const { createUser, updateUser } = <useConte></useConte>xt(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signupError, setSignupError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const navigate = useNavigate();

    // const handleSignUp = data => {
    //     createUser(data.email, data.password)
    //         .then(res => {
    //             setSignupError('')
    //             const user = res.user;
    //             console.log(user);
    //             toast('user created successfully')
    //             const userInfo = {
    //                 displayName: data.name
    //             }
    //             updateUser(userInfo)
    //                 .then(res => {
    //                     saveUsers(data.name, data.email);
    //                 })
    //                 .catch(err => console.error(err))
    //         })
    //         .catch(err => {
    //             console.error(err);
    //             setSignupError(err.message)
    //         })
    // }

    return (
        <div className='flex justify-center items-center'>
            <div>
                <img className='w-[450px] h-[400px]' src={login} alt="" />
            </div>
            <div className='mt-5 flex justify-center items-center'>
                <div className='w-96 p-7'>
                    <h2 className='text-center text-xl'>Sign Up</h2>
                    <form onSubmit={handleSubmit()}>
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
                        </div>
                        <input className='btn btn-accent w-full max-w-xs' value='sign up' type="submit" />
                        {
                            signupError && <p className='text-red-600'>{signupError}</p>
                        }
                    </form>
                    <p>Already have an account? <Link className='text-secondary' to='/login'>Login</Link></p>
                    <div className="divider"></div>
                    <button className='btn btn-outline w-full max-w-xs'>CONTINUE WITH GOOGLE</button>
                </div>
            </div >
        </div>
    );
};

export default SignUp;