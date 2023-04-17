import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { useState } from 'react'
import { useEffect } from 'react'
import url from '../../components/url'

const Profile = () => {
  const [currentUser] = useAuthState(auth)
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // fetching  Data of current user
    fetch(`${url}/currentUser/${currentUser.email}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => {
        setUser(data)
        setIsLoading(false)
      })
  }, [currentUser])

  if (isLoading) return <p className='min-h-[600px] text-2xl'>Loading...</p>
  return (
    <div className='md:-mt-10'>

      <div className='h-44   relative'>

        <img className='h-44 w-full' src="https://png.pngtree.com/background/20210710/original/pngtree-company-profile-corporate-culture-brochure-cross-page-design-background-material-picture-image_1011696.jpg" alt="" />

        <img className='border absolute  -bottom-10 border-black rounded-full w-24 h-24' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU" alt="" />
      </div>



      <div className='mt-16'>
        <p>Name : {user.name}</p>
        <p>Education: BSC in Computer Science and Technology</p>
        <p>Address: Dhaka, Bangladesh</p>
        <p>Email : {user.email}</p>
        <p>Age : {user.Age}</p>
        <p>Gender : {user.gender}</p>

      </div>


    </div>
  )
}

export default Profile