

import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import logo2 from '../assets/logo2.png'
// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-white text-2xl font-bold">
//           Logo
//         </Link>
//         <ul className="flex space-x-4 list-none">
//           <li>
//             <Link to="/" className="text-black hover:text-gray-300">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="text-white hover:text-gray-300">
//               About
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

const Navbar = () => {
  return (
    <div style={{display : "flex", flexDirection: "row", justifyContent: 'space-between' }} >
      {/* className="container mx-auto flex flex-row justify-between items-center" */}
      <div>
        <Link to="/" className="text-white text-2xl font-bold">
          <img style={{width:80}} className="color-white w-45" src={logo2} />
        </Link>
      </div>
      <div>
        <ul  style={{display : "flex", flexDirection: "row", justifyContent: 'n' }} className="flex flex-row space-x-4 list-none">
          <li >
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
 
      </div>
    </div>
  );
};
export default Navbar;
