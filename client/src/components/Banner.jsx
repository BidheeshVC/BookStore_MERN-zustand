// import React from 'react'
// import banner from '../assets/banner.jpg'

// const Banner = () => {
//     return (
//         <>
//             <>
//                 <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
//                     <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
//                         <div className="space-y-8">
//                             <h1 className="text-2xl md:text-4xl font-bold">
//                                 Hello, welcomes here to learn something{" "}
//                                 <span className="text-pink-500">new everyday!!!</span>
//                             </h1>
//                             <p className="text-sm md:text-xl">
//                                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
//                                 et totam. Tempora amet atque expedita, quae corrupti totam sed
//                                 pariatur corporis at veniam est voluptas animi!
//                             </p>
//                             <label className="input input-bordered flex items-center gap-2">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 16 16"
//                                     fill="currentColor"
//                                     className="w-4 h-4 opacity-70"
//                                 >
//                                     <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//                                     <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//                                 </svg>
//                                 <input type="text" className="grow" placeholder="Email" />
//                             </label>
//                         </div>
//                         <button className="btn mt-6 btn-secondary">Get Started</button>
//                     </div>
//                     <div className=" order-1 w-full mt-20 md:w-1/2">
//                         <img
//                         src={'https://i0.wp.com/apeejay.news/wp-content/uploads/2023/10/281023-10-most-read-books-Blog.jpg?resize=740%2C524&ssl=1'}
//                         // src={banner}
//                             className="md:w-[550px] md:h-[460px] md:ml-12"
//                             alt=""
//                         />
//                     </div>
//                 </div>
//             </>
//         </>
//     )
// }

// export default Banner


import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Banner = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-8 lg:px-16 py-24">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Content Section */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-pink-100 dark:bg-pink-900/30 rounded-full px-4 py-2">
                <span className="text-pink-600 dark:text-pink-400 font-medium text-sm">Start Learning Today</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
                Discover Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  New Every Day
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Embark on a journey of continuous learning and personal growth. 
                Join our community of curious minds and expand your knowledge 
                horizons with expert-curated content.
              </p>
            </div>

            {/* Email Subscription */}
            <div className="max-w-md">
              <div className="flex gap-2">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  </div>
                  <input 
                    type="email" 
                    className="w-full px-12 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:text-white"
                    placeholder="Enter your email" 
                  />
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 whitespace-nowrap">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                Join 10,000+ learners already on board! ✨
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative mt-8 md:mt-16">
              {/* Decorative elements */}
              <div className="absolute -z-10 top-8 right-8 w-72 h-72 bg-pink-100 dark:bg-pink-900/30 rounded-full blur-3xl opacity-30" />
              <div className="absolute -z-10 bottom-8 left-8 w-72 h-72 bg-purple-100 dark:bg-purple-900/30 rounded-full blur-3xl opacity-30" />
              
              <img
                src="https://i0.wp.com/apeejay.news/wp-content/uploads/2023/10/281023-10-most-read-books-Blog.jpg?resize=740%2C524&ssl=1"
                className="rounded-2xl shadow-2xl w-full object-cover dark:shadow-gray-900"
                alt="Learning Banner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;