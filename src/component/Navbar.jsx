

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

// const Navbar = () => {
//   return (
//     <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
//       <div>
//         <Link to="/" style={{ color: "white", fontSize: "2xl", fontWeight: "bold" }}>
//           <img style={{ width: '80px', color: "white" }} src={logo2} alt="Logo" />
//         </Link>
//       </div>
//       <div style={{ margin: '5px', padding: '5px', display: 'flex ', flexDirection:'row'}}>
//         <ul >
//           <li>
//             <Link to="/" style={{ color: "white", textDecoration: 'none', hover: { color: "gray-300" } }}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" style={{ color: "white", textDecoration: 'none', hover: { color: "gray-300" } }}>
//               About
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default Navbar;



const Navbar = () => {
  return (
    <div  style={{  justifyContent: 'space-between', display:'flex' , marginBottom: '2px'}}>
     
    
      <div>
        <Link to="/" style={{ color: "white", fontSize: "2xl", fontWeight: "bold" }}>
          <img style={{ width: '80px', color: "white" }} src={logo2} alt="Logo" />
        </Link>
      </div>
      <div style={{ margin: '5px', padding: '5px', display: 'flex', flexDirection: 'row' }}>
        <ul style={{ display: 'flex', flexDirection: 'row', listStyle: 'none', padding: 0 }}>
          <li style={{ marginRight: '30px' }}>
            <Link to="/" style={{ color: "white", textDecoration: 'none', hover: { color: "gray-300" } }}>
              Home
            </Link>
          </li>
          <li style={{ marginRight: '50px' }}>
            <Link to="/about" style={{ color: "white", textDecoration: 'none', hover: { color: "gray-300" } }}>
              About
            </Link>
          </li>
        </ul>
       
     
      </div>
      
     
      <div>
      {/* <hr  style={{width:'1200px',  color: 'white'}}/> */}
      </div>
    </div>
    
  );
};

export default Navbar;
