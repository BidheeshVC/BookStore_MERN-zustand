import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from './Cards';
import axios from 'axios';

const Freebook = () => {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");

                const data = res.data.filter((data) => data.category === "Free");
                console.log(data);
                setBook(data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-16">
                <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
                    {/* Header Section */}
                    <div className="max-w-3xl mb-12">
                        <div className="inline-block bg-pink-100 dark:bg-pink-900/30 rounded-full px-4 py-2 mb-4">
                            <span className="text-pink-600 dark:text-pink-400 font-medium text-sm">
                                Free Learning Resources
                            </span>
                        </div>

                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Free Offered Courses
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Start your learning journey with our carefully curated selection of free courses.
                            Access high-quality content and take the first step towards mastering new skills.
                        </p>
                    </div>

                    {/* Slider Section - Keeping original implementation */}
                    <div className="relative">
                        <Slider {...settings}>
                            {book.map((item) => (
                                <Cards item={item} key={item.id} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

        </>
        // <>
        //     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        //         <div>
        //             <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam omnis quasi illo repudiandae eum quae ducimus? Dolores temporibus adipisci dolorem ipsam aspernatur officiis rem odit quibusdam, impedit, neque placeat tempora!</p>
        //         </div>
        //         <div>
        //             <Slider {...settings}>
        //                 {book.map((item) => (
        //                     <Cards item={item} key={item.id} />
        //                 ))}
        //             </Slider>
        //         </div>
        //     </div>

        // </>
    )
}

export default Freebook