import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import login from '../../assets/images/login.svg';
import { toast } from 'react-toastify';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const [passwordError, setPasswordError] = useState('');
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
                    <button onClick={handleGoogleSignIn} className='' aria-label="Log in with Google">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                </div>
            </div >
        </div>
    );
};

export default Login;