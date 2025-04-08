// import React from 'react'

// const Cards = ({item}) => {
//     return (
//         <>
//             <div className='mt-4 my-3 p-3'>
//                 <div className="card w-92 bg-base-100 shadow-xl  hover:scale-105 duration-200">
//                     <figure>
//                         <img
//                             src={item.image}
//                             alt="Shoes" />
//                     </figure>
//                     <div className="card-body">
//                         <h2 className="card-title">
//                             {item.name}
//                             <div className="badge badge-secondary">{item.category}</div>
//                         </h2>
//                         <p>{item.title}</p>
//                         <div className="card-actions justify-between">
//                             <div className="badge badge-outline ">${item.price}</div>
//                             <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Cards

import React from 'react';
import { Star, Clock, Users, ChevronRight } from 'lucide-react';

const Cards = ({ item }) => {
  return (
    <div className="p-3">
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102">
        {/* Image Section */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
          {/* Price Tag */}
          {item.price === 0 ? (
            <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
              Free
            </div>
          ) : (
            <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-medium text-pink-600 dark:text-pink-400 shadow-md">
              ${item.price}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5">
          {/* Category and Rating */}
          <div className="flex justify-between items-center mb-3">
            <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full text-sm font-medium">
              {item.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {item.rating || "4.5"}
              </span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {item.name}
          </h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {item.title}
          </p>

          {/* Course Meta */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{item.duration || "6 weeks"}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
              <Users className="w-4 h-4" />
              <span className="text-sm">{item.students || "1,234"} students</span>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-medium">
            {item.price === 0 ? "Enroll Now" : "Buy Now"}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;