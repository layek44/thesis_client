
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaAddressCard } from 'react-icons/fa';
import location from './assets/location.png'
import { AiFillTwitterCircle } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ignxss8', 'template_oppn18a', form.current, 'rgNL_JOF5aEs_LbaP')
      .then((result) => {
        alert("Your emai sent successfully to the website admin")
      }, (error) => {
        console.log(error.text);
      });
  };


// service id  
//          public key        tamplate email  


  return (
    <div>
      {/* location */}
      <div>
        <h2 className="text-3xl font-bold mb-4 text-center">CONTACT US</h2>


        <div className='md:flex justify-between  md:p-10 px-4 bg-color-first'>
          <div className=" md:h-[450px] h-[200px] relative md:w-3/4 border-[1px] border-blue-600 " >
            {/* <Image className='md:p-4 p-1' src='' alt='' fill /> */}
            <img src={location} alt="" />
          </div>

          <div className='md:w-1/4 md:pl-4 grid grid-cols-1 gap-y-4 md:mt-0 mt-2'>
            <div className='border-[1px] border-blue-500 md:flex items-center p-4'>

              <div className='bg-blue-600 p-4'>
                <AiOutlinePhone className='text-xl text-white' />
              </div>
              <div className='md:ml-10'>
                <h1 className='text-2xl font-bold mb-2'>Phone</h1>
                <p>+8618021173649</p>
            

              </div>
            </div>
            <div className='border-[1px] border-blue-500 md:flex items-center p-4'>

              <div className='bg-blue-600 p-4'>
                <AiOutlineMail className='text-xl text-white' />
              </div>
              <div className='md:ml-10'>
                <h1 className='text-2xl font-bold mb-2'>Email</h1>
                <p>layek950@gmail.com</p>


              </div>
            </div>

            <div className='border-[1px] border-blue-500 md:flex items-center p-4'>

              <div className='bg-blue-600 p-4'>
                <FaAddressCard className='text-xl text-white' />
              </div>
              <div className='md:ml-10'>
                <h1 className='text-2xl font-bold mb-2'>Adress</h1>

              <p>Xishan Avenue, Xishan District, Wuxi, Wuxi, Jiangsu, China</p>

              </div>
            </div>

          </div>

        </div>
      </div>
      {/* contact form */}
      <div className='pt-20'>

        <h1 className='text-3xl font-bold mb-4 text-center'>GET IN TOUCH</h1>
        <div className='sm:flex justify-center '>
          <div className=''>
            <div className="w-full mt-10 ">
              <form ref={form} onSubmit={sendEmail} className='md:w-[1200px] px-4'>
                <div className='md:flex'>
         
                  <input className="mt-2 w-full rounded-md p-2 border-[1px] focus:border-2 focus:border-blue-600 border-blue-600 focus:outline-none  md:mr-4" name="user_name" placeholder='Name' type="text" /><br />
                  <input className="mt-2 w-full rounded-md p-2 border-[1px] focus:border-2 focus:border-blue-600 border-blue-600 focus:outline-none  md:mx-2" name="user_email" placeholder='Email' type="email" /><br />
                  <input className="mt-2 w-full rounded-md p-2 border-[1px] focus:border-2 focus:border-blue-600 border-blue-600 focus:outline-none  md:ml-4" name="phone" placeholder='Phone' type="phone" /><br />
                </div>
                <textarea className="mt-6 w-full rounded-md p-2 border-[1px] focus:border-2 focus:border-blue-600 border-blue-600 focus:outline-none" name="message" placeholder='Massage' cols={30} rows={10}></textarea><br />

                <input className="mt-2 w-full rounded-md p-2 border-[1px] focus:border-2 focus:border-blue-600 border-blue-600 focus:outline-none hover:bg-color-second  hover:text-blue-600 font-bold text-xl" type="submit" value='SUBMIT' />
                <br />
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
