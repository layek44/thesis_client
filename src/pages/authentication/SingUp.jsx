import React from 'react'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import url from '../../components/url';


const SignUp = () => {



    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const [updateProfile, updateError] = useUpdateProfile(auth);





    if (loading) return <div className='flex justify-center items-center h-screen'> <p>Loading...</p>
    </div>
    let firebaseError;
    if (error || updateError) {
        firebaseError = <small className='text-red-500'>{error?.message || updateError?.message}</small>
    }
    if (user) {
         navigate('/');
    }
    const onSubmit = async data => {
        fetch(`${url}/createUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));

        // the input values are provided by user is send to firebase via createUserWithEmailAndPassword function to create a new user.
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
    }
    return (
        <div className='flex justify-center items-center pt-24 min-h-screen'>
            <div className="card w-96 bg-base-100 shadow-blue-600 shadow-xl border-[1px] border-blue-500">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input

                                type="text"
                                placeholder="Name"
                                className="input input-bordered border-black w-full max-w-xs"
                                {...register("name")} required />
                        </div>

                        {/* Age */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Age"
                                className="input input-bordered border-black w-full max-w-xs"
                                {...register("Age")} required />
                        </div>

                        {/* Gender */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <div className="flex items-center justify-between border-[1px] border-black rounded-lg px-4 py-2.5">
                                <label className='flex items-center'>
                                    <input
                                        type="radio"
                                        value="Male"
                                        className="radio checked:bg-blue-700 border-[.5px] border-black w-5 h-5"
                                        {...register("gender", { required: true })}
                                        required
                                    />
                                    <span className="label-text ml-2">Male</span>
                                </label>

                                <label className='flex items-center'>
                                    <input
                                        type="radio"
                                        value="Female"
                                        className="radio checked:bg-blue-700 border-[.5px] border-black w-5 h-5"
                                        {...register("gender", { required: true })}
                                        required
                                    />
                                    <span className="label-text ml-2">Female</span>
                                </label>
                                <label className='flex items-center'>
                                    <input
                                        type="radio"
                                        value="Other"
                                        className="radio checked:bg-blue-700 border-[.5px] border-black w-5 h-5"
                                        {...register("gender", { required: true })}
                                        required
                                    />
                                    <span className="label-text ml-2">Other</span>
                                </label>
                            </div>
                            {errors.gender && <span className="text-red-500">This field is required</span>}
                        </div>


                        {/* Email  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input

                                type="email"
                                placeholder="Email"
                                className="input input-bordered border-black w-full max-w-xs"
                                {...register("email")} required />

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
                    <small>Already have an account ?<Link className='text-blue-700 ml-4' to='/logIn'>Go to Login</Link></small>







                </div>
            </div>
        </div>
    )
}

export default SignUp