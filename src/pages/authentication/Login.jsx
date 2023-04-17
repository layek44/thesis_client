import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';



const Login = () => {

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);


    const { register, formState: { errors }, handleSubmit } = useForm();


    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";



    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, from, navigate])

    let firebaseError;

    if (loading) {

        return <div className='flex justify-center items-center h-screen text-2xl'> <p>Loading...</p>
        </div>
    }

    if (error) {
        firebaseError = <small className='text-red-500'>{error?.message}</small>
    }

    const onSubmit = data => {
        // the input values are provided by user is send to firebase via signInWithEmailAndPassword function 
        signInWithEmailAndPassword(data.email, data.password)

    }
    return (
        <div className='flex justify-center items-center pt-24  min-h-screen'>
            <div className="card w-96 bg-base-100 shadow-blue-600 shadow-xl border-[1px] border-blue-500">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Log In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered border-black w-full max-w-xs"

                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'This is required field'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'This is wrong email'
                                    }
                                })} />

                            <label className="label">

                                {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email?.message}</span>}
                            </label>

                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input

                                type="password"
                                placeholder="password"
                                className="input input-bordered border-black w-full max-w-xs"

                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'This is password required field'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters'
                                    }
                                })} />

                            <label className="label">

                                {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password?.message}</span>}
                            </label>

                        </div>
                        {firebaseError}
                        <button
                            type="submit"
                            className="btn btn-outline w-full hover:bg-blue-700">Submit</button>
                    </form>


                    <div className='flex justify-between text-xs text-blue-500 font-bold'>
                        <Link to='/signUp'>Create new account</Link>
                        <Link to='/resetPassword'>Forgot password ?</Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;