
import React from 'react'


const Footer = () => {
  return (<div className="mt-20">
    <div className="bg-blue-700 flex sm:p-3 p-2">
      {/* Address div start here */}
      <div className="w-1/2 sm:p-6 p-2 text-white border-r">
        <p className="text-xl">Address</p><p className="w-24 h-0.5 bg-white mt-4 mb-4"></p>Xishan Avenue, <br /> Xishan District, <br /> Wuxi, Wuxi, Jiangsu, China
      </div>


      {/* navigation div start here  */}
      <div className="w-1/2 sm:p-6 p-2"><div className="text-white">
        <h1 className="text-xl text-white">Explore On</h1>
        <p className="w-24 h-0.5 bg-white mt-4 mb-4"></p>
        <p className="hover:text-white"><a href="/#Home">Home</a></p>
        <p className="hover:text-white"><a href="/#scenario">Scenario</a></p>
        <p className="hover:text-white"><a href="/#Contact">Contact</a></p>
        <p className="hover:text-white"><a href="/#AboutUs">About Us</a></p>
      </div>
        <p className="text-white text-xl mt-4">Join our community</p>
        <p className="w-32 h-0.5 bg-white mt-4 mb-5"></p>

        {/* social media link div start here  */}
        <div className="flex">
          <a href="https://www.facebook.com/sony.layek44" target='_blank_'>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="hover:bg-white bg-white text-blue-700 border-1 mr-2 text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>
          </a>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="hover:bg-white bg-white text-blue-700 border-1 mr-2 text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path></svg>

          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="hover:bg-white bg-white text-blue-700 border-1 mr-2 text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 80v352c0 26.5-21.5 48-48 48H154.4c9.8-16.4 22.4-40 27.4-59.3 3-11.5 15.3-58.4 15.3-58.4 8 15.3 31.4 28.2 56.3 28.2 74.1 0 127.4-68.1 127.4-152.7 0-81.1-66.2-141.8-151.4-141.8-106 0-162.2 71.1-162.2 148.6 0 36 19.2 80.8 49.8 95.1 4.7 2.2 7.1 1.2 8.2-3.3.8-3.4 5-20.1 6.8-27.8.6-2.5.3-4.6-1.7-7-10.1-12.3-18.3-34.9-18.3-56 0-54.2 41-106.6 110.9-106.6 60.3 0 102.6 41.1 102.6 99.9 0 66.4-33.5 112.4-77.2 112.4-24.1 0-42.1-19.9-36.4-44.4 6.9-29.2 20.3-60.7 20.3-81.8 0-53-75.5-45.7-75.5 25 0 21.7 7.3 36.5 7.3 36.5-31.4 132.8-36.1 134.5-29.6 192.6l2.2.8H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path></svg>
        </div>
      </div>
    </div>
    <div className="bg-blue-700 text-white text-center py-3 border-t"><p>© Copyright By<a href="https://www.facebook.com/sony.layek44" target='_blank_'> Layek Md Sony</a>
    </p>
    </div>
  </div>
  )
}

export default Footer