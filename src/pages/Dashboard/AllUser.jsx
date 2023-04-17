import React, { useEffect, useState } from 'react'

import url from '../../components/url';

const AllUser = () => {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    // Coming data of all users from database 
    fetch(`${url}/allUsers`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setUsers(data)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <p className='min-h-[600px] text-2xl'>Loading...</p>

  return (
    <div className='min-h-[600px]'>


      <div className="overflow-x-auto">
        {/* this div is for medium to larger device */}
        <div className='hidden md:block'>
          <table className="table w-full">

            <thead className='border-[1px] border-blue-700'>
              <tr >
                <th className='border-[1px] border-blue-700  text-base'>User Email</th>
                <th className='border-[1px] border-blue-700  text-base'>User Name</th>
                <th className='border-[1px] border-blue-700  text-base'>User Age</th>
                <th className='border-[1px] border-blue-700  text-base'>Gender</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => <tr className='border-[1px] border-blue-700'>
                <td className='border-[1px] border-blue-700'>{user.email}</td>
                <td className='border-[1px] border-blue-700'>{user.name}</td>
                <td className='border-[1px] border-blue-700'>{user.Age}</td>
                <td className='border-[1px] border-blue-700'>{user.gender}</td>
              </tr>)}
            </tbody>
          </table>
        </div>

        {/* this div is for mobile device */}
        <div className='pr-2 md:hidden block'>
          <table className="table w-full">

            <thead className='border-[1px] border-blue-700'>
              <tr >
                <th className='border-[1px] border-blue-700  text-base'>User Email</th>
                <th className='border-[1px] border-blue-700  text-base'>Details</th>

              </tr>
            </thead>
            <tbody>
              {users.map((user , index) => <tr className='border-[1px] border-blue-700'>
                <td className='border-[1px] border-blue-700'>{user.email}</td>
                <td className='border-[1px] border-blue-700'> <label htmlFor={`${index}`} className='font-light'>Details</label></td>

                <input type="checkbox" id={`${index}`} className="modal-toggle" />
                <div className="modal md:mt-0 m-0">
                  <div className="modal-box m-0  p-2">
                    <div className='text-end m-0'>
                      <label className="border-2 border-blue-600 rounded-full  px-1 font-bold" htmlFor={`${index}`} >x</label></div>
                    <div className="modal-action p-0 flex justify-start">
                      <div className=' w-full  pb-4 px-4'>
                        <p className='text-justify'>Email:{user.email}</p>
                        <p className='text-justify'>Name:{user.name}</p>
                        <p className='text-justify'>Age:{user.Age}</p>
                        <p className='text-justify'>Gender:{user.gender}</p>



                      </div>
                    </div>
                  </div>
                </div>
              </tr>)}
            </tbody>
          </table>
        </div>

      </div>
    </div>

  )
}


export default AllUser