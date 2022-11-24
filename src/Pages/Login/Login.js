import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import login from '../../assets/images/login.svg';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                setLoginUserEmail(data.email);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err.message);
                setLoginError(err.message)
            })
    }

    return (
        <div className='flex justify-center items-center'>
            <div>
                <img className='w-[450px] h-[400px]' src={login} alt="" />
            </div>
            <div className='mt-5 flex justify-center items-center'>
                <div className='w-96 p-7'>
                    <h2 className='text-center text-xl'>Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="text"
                                {...register("email", {
                                    required: 'Email address is required'
                                })
                                }
                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password"
                                {...register("password", {
                                    required: 'Password is required',
                                    minLength: { value: 6, message: 'Password must be 6 characters or long' },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                })
                                }
                                className="input input-bordered w-full max-w-xs"
                            />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                            <label className="label"><span className="label-text">Forgot Password?</span></label>
                        </div>
                        <input className='btn btn-accent w-full max-w-xs' value='Login' type="submit" />
                        {
                            loginError && <p className='text-red-600'>{loginError}</p>
                        }
                    </form>

                    <p>New to guitare? <Link className='text-secondary' to='/signup'>Create new account</Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full max-w-xs'>CONTINUE WITH GOOGLE</button>
                </div>
            </div >
        </div>
    );
};

export default Login;