import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';


const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);


    let location = useLocation();


    if (loading) return <div className='flex justify-center items-center h-screen'> <p>Loading</p>
    </div>
    // when user found the  RequireAuth function navigate to the children . Otherwise it navigate to login page 

    if (!user) {
        return <Navigate to="/logIn" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth







