import React, { useEffect, useState } from 'react'
import img from '../assets/img8.jpg'
import img2 from '../assets/ban.png'

import { AiFillStar } from 'react-icons/ai'

import Contact from '../Contact'
import url from '../components/url'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'

const Home = () => {

    const [user] = useAuthState(auth)

    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`${url}/review`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setIsLoading(false)
            })
    }, [])


    const icon = <p className='text-orange-500'><AiFillStar /></p>
    return (
        <div className=''>

            {/* banner div start here  */}
            <div id='Home' className='md:pt-10 pt-10'>
                {/* this image is for desktop */}
                <img className=' h-screen w-full md:block hidden' src={img} alt="" />
                {/* this image is for mobile device */}
                <img className=' h-screen w-full block md:hidden' src={img2} alt="" />
            </div>

            {/* scenario div start here  */}

            <div id='scenario' className='pt-24 md:px-10 px-4'>
                <h1 className='text-3xl font-bold mb-4 text-center'>THE MOST HEART TOUCHING SITE IN BANGLADESH</h1>
                {/* Cox Bazar */}
                <div className=' w-full  md:flex justify-between mt-10 border-[1px] border-blue-600 rounded-lg overflow-hidden md:h-[410px] group group'>
                    <div className='md:w-1/2 overflow-hidden'>
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e2/f8/43/longest-sea-beach-in.jpg?w=700&h=-1&s=1" className='h-full transition ease-in-out duration-1000 group-hover:scale-125' alt="" />
                    </div>
                    <div className='md:w-1/2 px-4'>
                        <p className='text-3xl  font-bold'>Cox Bazar </p>
                        <p>Welcome to Cox's Bazar, the ultimate tourist destination in Bangladesh. With its long and beautiful natural sandy beach stretching over 120 km, Cox's Bazar is a paradise for sun-seekers, surfers, and beach lovers. The town is also rich in culture and history, with attractions such as the Cox's Bazar Buddhist Temple and the Cox's Bazar Museum.</p>
                        <p>Don't forget to visit the Himchori Waterfall, a spectacular sight surrounded by lush green forests. And for those who love shopping, the local markets offer a wide range of traditional Bangladeshi handicrafts and souvenirs.</p>
                        <p>Cox's Bazar is also known for its delicious seafood, served in local restaurants and cafes. From traditional Bangladeshi cuisine to international dishes, there's something for everyone.</p>
                        <p>Experience the beauty and charm of Cox's Bazar, the perfect destination for a memorable vacation.</p>
                    </div>
                </div>

                {/* Lawachara forest */}
                <div className='w-full md:flex justify-between mt-10 border-[1px] border-blue-600 rounded-lg overflow-hidden md:h-[410px] group'>
                    <div className='md:w-1/2 overflow-hidden'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQyQNZRk6G64rRIWzV4YusXMCcVC4KmW3TQ&usqp=CAU" className='w-full h-full transition ease-in-out duration-1000 group-hover:scale-125' alt="" />
                    </div>
                    <div className='md:w-1/2 px-4  order-first'>
                        <p className='text-3xl  font-bold'>Lawachara forest</p>
                        <p>Lawachara Forest, a stunning natural destination in Bangladesh. Located in the northeastern region, this tropical forest is a paradise for nature lovers and adventure seekers.</p>
                        <p>Home to many rare and endangered species, Lawachara Forest is a popular destination for wildlife enthusiasts. Visitors can explore the forest and spot a variety of animals, including gibbons, macaques, and deer. The forest is also famous for its diverse bird population, making it a perfect destination for birdwatchers.</p>
                        <p>The forest offers a range of activities, from hiking to camping, making it an ideal spot for those looking to escape the hustle and bustle of city life. Visitors can also enjoy the natural beauty of the forest and its stunning waterfalls.</p>
                        <p>
                            Experience the natural beauty of Lawachara Forest, a must-visit destination for anyone seeking adventure and a unique experience in Bangladesh.
                        </p>
                    </div>

                </div>

                {/*Kuakata Sea Beach*/}
                <div className=' w-full  md:flex justify-between mt-10 border-[1px] border-blue-600 rounded-lg overflow-hidden md:h-[410px] group'>
                    <div className='md:w-1/2 overflow-hidden'>
                        <img className='h-full w-full transition ease-in-out duration-1000 group-hover:scale-125' src="https://upload.wikimedia.org/wikipedia/commons/3/37/Kuakata_beach.jpg" alt="" />
                    </div>
                    <div className='md:w-1/2 px-4 '>
                        <p className='text-3xl  font-bold'>Kuakata Sea Beach</p>
                        <p>Welcome to Kuakata Sea Beach, a hidden gem on the southern coast of Bangladesh. This pristine beach offers breathtaking views of the Bay of Bengal and is a must-visit destination for any traveler looking to experience the natural beauty of Bangladesh.</p>
                        <p>One of the main attractions of Kuakata is its stunning sunrise and sunset views. Visitors can witness the sun rising from the sea in the east and setting in the west, making it a perfect destination for nature enthusiasts and photographers.</p>
                        <p>Experience the beauty and charm of Kuakata Sea Beach, a unique and unforgettable destination in Bangladesh.</p>
                    </div>
                </div>

                {/* Mangrove Forest(Sundarbon) */}
                <div className=' w-full  md:flex justify-between mt-10 border-[1px] border-blue-600 rounded-lg overflow-hidden md:h-[410px] group'>
                    <div className='md:w-1/2 overflow-hidden'>
                        <img className='w-full h-full transition ease-in-out duration-1000 group-hover:scale-125' src="https://i.natgeofe.com/n/a50f7239-ff6d-4874-9448-25d94d8d1c80/sundarbans-bangladesh_16x9.jpg?w=1200" alt="" />
                    </div>
                    <div className='md:w-1/2 px-4 order-first'>
                        <p className='text-3xl  font-bold'>Mangrove Forest(Sundarbon)</p>
                        <p>Welcome to the Sundarbans, the largest mangrove forest in the world and a UNESCO World Heritage Site. Located in the southwestern region of Bangladesh, the Sundarbans is a must-visit destination for any traveler looking to experience the natural beauty and wildlife of Bangladesh.</p>
                        <p>Home to the Royal Bengal Tiger, the Sundarbans is a popular destination for wildlife enthusiasts. Visitors can take a boat tour through the forest and spot a variety of animals, including crocodiles, deer, and monkeys. The forest is also famous for its diverse bird population, making it a perfect destination for birdwatchers.</p>

                        <p>The Sundarbans also offers a unique cultural experience, as visitors can interact with the local communities and learn about their way of life. The forest also has a rich history, with many ancient ruins and archaeological sites to explore.</p>

                        <p>Experience the wonder and beauty of the Sundarbans, a natural and cultural treasure that will leave you in awe.</p>
                    </div>

                </div>

                {/* St. Martin's Island */}
                <div className=' w-full  md:flex justify-between mt-10 border-[1px] border-blue-600 rounded-lg overflow-hidden md:h-[410px] group'>
                    <div className='md:w-1/2 overflow-hidden'>
                        <img className='w-full h-full transition ease-in-out duration-1000 group-hover:scale-125' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-bJD0Mri8Gw75ZYO4LscuvBSMen7c_mMMg&usqp=CAU" alt="" />
                    </div>
                    <div className='md:w-1/2 px-4 '>
                        <p className='text-3xl  font-bold'>St. Martin's Island</p>
                        <p>St. Martin's Island, located in the Bay of Bengal, is a unique and stunning destination in Bangladesh. The island is famous for its beautiful sandy beaches, crystal-clear waters, and coral reefs.</p>
                        <p>The island is a popular destination for snorkeling and scuba diving, with its clear waters providing a perfect opportunity to discover the colorful and vibrant underwater world. Visitors can also indulge in a variety of water sports, including jet skiing and parasailing.</p>
                        <p>St. Martin's Island is also a place of cultural significance, with a rich history that dates back centuries. Visitors can learn about the island's history and culture by visiting local museums and monuments.</p>
                        <p>Overall, St. Martin's Island is a must-visit destination for anyone looking for a unique and unforgettable experience. The island's natural beauty, wildlife, and cultural significance make it a true gem in the Bay of Bengal.</p>
                    </div>
                </div>
            </div>



            {/* About Us div start from here */}
            <div id='AboutUs' className='pt-24 md:px-10 px-2 flex justify-center text-justify'>
                <div className=''>

                    <p className='text-3xl font-bold mb-4 text-center'>WHY WE ARE EXEPTIONAL</p>
                    <div className='mt-4'>
                        <p className='text-xl font-bold'>At our travel agency, we strive to provide the best possible experience for all of our customers. Whether you're planning a weekend getaway or a trip around the world, we have the expertise and resources to help make your travel dreams a reality.</p>
                        <p className='text-xl font-bold'>Here are just a few of the services we offer:</p>

                        <div className='md:flex justify-center'>
                            <div className='border border-blue-600 p-4 rounded-xl m-4 shadow-lg shadow-blue-600 md:w-3/12 md:h-96'>
                                <div className='flex justify-center'>
                                    <img className='w-20 h-20 p-2 border border-black rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5EVXelHoBjUs4hooBApP9o9lF5THHP5Gfm9K1q5T_wNhRnvR0EQ8lZH_i69qX3oanM-0&usqp=CAU" alt="" />
                                </div>
                                <p className='text-center font-bold mb-2 text-lg'> Customized travel packages:</p>
                                <p>We understand that each traveler is unique, which is why we offer customized travel packages tailored to your specific needs and preferences. From luxurious accommodations to adventurous excursions, we can create a personalized itinerary that suits your interests and budget.</p>
                            </div>

                            <div className='border border-blue-600 p-4 rounded-xl m-4 shadow-lg shadow-blue-600 md:w-3/12 md:h-96'>
                                <div className='flex justify-center'>
                                    <img className='w-20 h-20 p-2 border border-black rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9StHkEyk7z-7Sh4DONrPzNdgLh4lJXOvB-w&usqp=CAU" alt="" />
                                </div>
                                <p className='text-center font-bold mb-2 text-lg'> Flights and transportation:</p>
                                <p> We can help you find the best deals on flights and transportation, whether you're traveling domestically or internationally. Our experienced team can help you navigate the complex world of airline and transportation logistics, ensuring a smooth and stress-free travel experience.</p>
                            </div>


                            <div className='border border-blue-600 p-4 rounded-xl m-4 shadow-lg shadow-blue-600 md:w-3/12 md:h-96'>
                                <div className='flex justify-center'>
                                    <img className='w-20 h-20 p-2 border border-black rounded-full' src="https://w7.pngwing.com/pngs/756/905/png-transparent-nokras-riverine-hotel-spa-accommodation-motel-computer-icons-hotel-text-rectangle-room.png" alt="" />
                                </div>
                                <p className='text-center font-bold mb-2 text-lg'> Accommodations:</p>
                                <p>We partner with some of the best hotels and resorts around the world to provide our customers with a wide range of accommodation options. From budget-friendly hostels to luxurious five-star hotels, we can help you find the perfect place to stay for your trip.</p>
                            </div>
                        </div>

                        <div className='md:flex justify-center'>
                            <div className='border border-blue-600 p-4 rounded-xl m-4 shadow-lg shadow-blue-600 md:w-3/12 md:h-96'>
                                <div className='flex justify-center'>
                                    <img className='w-20 h-20 p-2 border border-black rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKSMI_wWOjcK_hDlSLgwTjz7eg7UCUkhDl0xatc9E6XWuuX8CKitW8C1_nrhkt8ewNkyM&usqp=CAU" alt="" />
                                </div>
                                <p className='text-center font-bold mb-2 text-lg'> Activities and excursions:</p>
                                <p> Whether you're looking for a relaxing day at the beach or an adrenaline-fueled adventure, we can help you plan the perfect activities and excursions for your trip. From guided tours to cultural experiences, we have a wide range of options to choose from.</p>
                            </div>
                            <div className='border border-blue-600 p-4 rounded-xl m-4 shadow-lg shadow-blue-600 md:w-3/12 md:h-96'>
                                <div className='flex justify-center'>
                                    <img className='w-20 h-20 p-2 border border-black rounded-full' src="https://cdn.iconscout.com/icon/premium/png-256-thumb/travel-insurance-1409919-1193848.png" alt="" />
                                </div>
                                <p className='text-center font-bold mb-2 text-lg'> Travel insurance:</p>
                                <p> We understand that unexpected events can happen while traveling, which is why we offer travel insurance to protect our customers in case of emergencies or unforeseen circumstances.</p>
                            </div>
                        </div>



                        <p>
                            At our travel agency, we are committed to providing exceptional service and creating unforgettable travel experiences for our customers. Contact us today to start planning your next adventure!
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact div start from here  */}
            <div id='Contact' className='pt-24'>
                <Contact />
            </div>
            {/* review div start from here  */}
            <div id='review' className='md:px-16 px-4 pt-24'>
                <h1 className='text-3xl font-bold mb-4 text-center'>TESTIMONIALS</h1>
                {isLoading ? <p className='text-center text-2xl mt-10'>Loading...</p> : <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-16'>
                    {reviews.slice(-4).map((r, index) => <div key={r._id} className='md:flex items-center p-2 border border-blue-600 mt-2 rounded-lg md:h-44 shadow-lg shadow-blue-500'>
                        <div className='md:w-2/12 w-full mr-4 '>
                            <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" className='h-12 w-12 rounded-full border-blue-600 border-2' alt="" srcSet="" />
                        </div>
                        <div className='md:w-10/12 pr-4'>
                            <div className='flex justify-between'>
                                <p className='text-xl font-bold'> {r.name} </p>
                                <div>
                                    {r.ratings == 1 && <div className='flex'>{icon}</div>}
                                    {r.ratings == 2 && <div className='flex'>{icon}{icon}</div>}
                                    {r.ratings == 3 && <div className='flex'>{icon}{icon}{icon}</div>}
                                    {r.ratings == 4 && <div className='flex'>{icon}{icon}{icon}{icon}</div>}
                                    {r.ratings == 5 && <div className='flex'>{icon}{icon}{icon}{icon}{icon}</div>}
                                </div>
                            </div>
                            <p className='text-justify'>{r.review.slice(0, 100)}{r.review.length > 101 && '.....'}</p>
                            {r.review.length > 101 && <div>
                                <p className='mt-2'>
                                    <label htmlFor={`${index}`} className='border-[.5px] border-blue-600 rounded p-1 font-light'>Read More</label>
                                </p>
                                <input type="checkbox" id={`${index}`} className="modal-toggle" />
                                <div className="modal md:mt-0 m-0">
                                    <div className="modal-box m-0  p-2">
                                        <div className='text-end m-0'>
                                            <label className="border-2 border-blue-600 rounded-full  px-1 font-bold" htmlFor={`${index}`} >x</label></div>
                                        <div className="modal-action p-0 flex justify-start">
                                            <div className=' w-full  pb-4 px-4'>
                                                <p className='text-justify'>{r.review}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>}
                        </div>
                    </div>)}
                </div>}
            </div>
        </div>
    )
}

export default Home