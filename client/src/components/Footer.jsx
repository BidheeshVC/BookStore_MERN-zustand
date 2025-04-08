// import React from "react";

// function Footer() {

//   return (
//     // <div>
//     //   <hr />
//     //   <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white white:text-dark">
//     //     <nav className="grid grid-flow-col gap-4">
//     //       <a className="link link-hover">About us</a>
//     //       <a className="link link-hover">Contact</a>
//     //       <a className="link link-hover">Jobs</a>
//     //       <a className="link link-hover">Press kit</a>
//     //     </nav>
//     //     <nav>
//     //       <div className="grid grid-flow-col gap-4">
//     //         <a>
//     //           <svg
//     //             xmlns="http://www.w3.org/2000/svg"
//     //             width="24"
//     //             height="24"
//     //             viewBox="0 0 24 24"
//     //             className="fill-current"
//     //           >
//     //             <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//     //           </svg>
//     //         </a>
//     //         <a>
//     //           <svg
//     //             xmlns="http://www.w3.org/2000/svg"
//     //             width="24"
//     //             height="24"
//     //             viewBox="0 0 24 24"
//     //             className="fill-current"
//     //           >
//     //             <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//     //           </svg>
//     //         </a>
//     //         <a>
//     //           <svg
//     //             xmlns="http://www.w3.org/2000/svg"
//     //             width="24"
//     //             height="24"
//     //             viewBox="0 0 24 24"
//     //             className="fill-current"
//     //           >
//     //             <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//     //           </svg>
//     //         </a>
//     //       </div>
//     //     </nav>
//     //     <aside>
//     //       <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
//     //     </aside>
//     //   </footer>
//     // </div>

//     // <footer className="bg-white dark:bg-gray-900">
//     //   <div className="max-w-screen-2xl mx-auto px-4 pt-16 pb-8">
//     //     {/* Main Footer Content */}
//     //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
//     //       {/* Company Info */}
//     //       <div className="space-y-4">
//     //         <h3 className="text-xl font-bold text-gray-900 dark:text-white">Learning Platform</h3>
//     //         <p className="text-gray-600 dark:text-gray-300">
//     //           Empowering minds through quality education and accessible learning resources.
//     //         </p>
//     //         <div className="flex items-center space-x-4">
//     //           <a href="#" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400">
//     //             <Mail className="w-5 h-5" />
//     //           </a>
//     //           <a href="#" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400">
//     //             <Phone className="w-5 h-5" />
//     //           </a>
//     //           <a href="#" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400">
//     //             <MapPin className="w-5 h-5" />
//     //           </a>
//     //         </div>
//     //       </div>

//     //       {/* Quick Links */}
//     //       <div className="space-y-4">
//     //         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
//     //         <ul className="space-y-3">
//     //           {['About Us', 'Contact', 'Jobs', 'Press Kit', 'Blog'].map((item) => (
//     //             <li key={item}>
//     //               <a 
//     //                 href="#" 
//     //                 className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400 transition-colors"
//     //               >
//     //                 {item}
//     //               </a>
//     //             </li>
//     //           ))}
//     //         </ul>
//     //       </div>

//     //       {/* Resources */}
//     //       <div className="space-y-4">
//     //         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Resources</h3>
//     //         <ul className="space-y-3">
//     //           {['Free Courses', 'Premium Courses', 'Blog Posts', 'Help Center', 'FAQ'].map((item) => (
//     //             <li key={item}>
//     //               <a 
//     //                 href="#" 
//     //                 className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400 transition-colors"
//     //               >
//     //                 {item}
//     //               </a>
//     //             </li>
//     //           ))}
//     //         </ul>
//     //       </div>

//     //       {/* Newsletter */}
//     //       <div className="space-y-4">
//     //         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Stay Updated</h3>
//     //         <p className="text-gray-600 dark:text-gray-300">
//     //           Subscribe to our newsletter for the latest updates and free resources.
//     //         </p>
//     //         <div className="flex space-x-2">
//     //           <input 
//     //             type="email" 
//     //             placeholder="Enter your email" 
//     //             className="flex-grow px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//     //           />
//     //           <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
//     //             Subscribe
//     //           </button>
//     //         </div>
//     //       </div>
//     //     </div>

//     //     {/* Social Links */}
//     //     <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
//     //       <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//     //         <p className="text-gray-600 dark:text-gray-300">
//     //           © 2024 Learning Platform. All rights reserved.
//     //         </p>
//     //         <div className="flex space-x-6">
//     //           <a href="#" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400 transition-colors">
//     //             <Twitter className="w-5 h-5" />
//     //           </a>
//     //           <a href="#" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400 transition-colors">
//     //             <Youtube className="w-5 h-5" />
//     //           </a>
//     //           <a href="#" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400 transition-colors">
//     //             <Facebook className="w-5 h-5" />
//     //           </a>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </footer>

//   );
// }

// export default Footer;


import React from 'react';
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const menuItems = [
  {
    title: "Quick Links",
    links: ["About Us", "Contact", "Jobs", "Press Kit", "Blog"],
  },
  {
    title: "Resources",
    links: ["Free Courses", "Premium Courses", "Blog Posts", "Help Center", "FAQ"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mb-16">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Learning Platform</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Empowering minds through quality education and accessible learning resources.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Dynamic Menu Items */}
          {menuItems.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Stay Updated</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Subscribe to our newsletter for the latest updates and free resources.
            </p>
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Social Links */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-300">
              © 2024 Learning Platform. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
