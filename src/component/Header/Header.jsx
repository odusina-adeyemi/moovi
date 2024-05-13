// import React, { useState, useEffect } from "react";
// import poster1 from "../assets/poster1.jpg";
// import poster2 from "../assets/poster2.jpg";

// const Hero = () => {
//     const [posters, setPosters] = useState([]);

//     useEffect(() => {
//         const loadImages = async () => {
//             const importedPosters = [poster1, poster2];
//             setPosters(importedPosters);
//         };

//         loadImages();
//     }, []);

//     return (
//         <div>
//             <header>
//                 <h1>Welcome to Movie Suggest</h1>
//                 <p>Discover your next favorite movie</p>
//             </header>
//             <div className="hero-slider">
//                 {posters.map((poster, index) => (
//                     <img key={index} src={poster} alt={`Poster ${index + 1}`} loading="lazy" />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Hero;


// import React, { useState, useEffect } from "react";
// import poster1 from "../assets/poster1.jpg";
// import poster2 from "../assets/poster2.jpg";

// const Hero = () => {
//     const [posters, setPosters] = useState([]);

//     useEffect(() => {
//         const loadImages = async () => {
//             try {
//                 // Simulating delay for image loading (replace with actual image loading logic)
//                 await new Promise(resolve => setTimeout(resolve, 1000));

//                 // Import posters and update state
//                 const importedPosters = [poster1, poster2];
//                 setPosters(importedPosters);
//             } catch (error) {
//                 console.error("Error loading images:", error);
//             }
//         };

//         loadImages();
//     }, []);

//     return (
//         <div>
//             <header>
//                 <h1>Welcome to Movie Suggest</h1>
//                 <p>Discover your next favorite movie</p>
//             </header>
//             <div className="hero-slider">
//                 {posters.map((poster, index) => (
//                     <img key={index} src={poster} alt={`Poster ${index + 1}`} loading="lazy" />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Hero;



import React from 'react';
// import Navbar from "../Navbar/Navbar";
import './Header.css';

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            {/* <Navbar /> */}
            <div className='header-content '>
                <h2 className='header-title'>find your favourite.</h2><br />
                <p className='header-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>
                {/* <SearchForm /> */}
            </div>
        </header>
    </div>
  )
}

export default Header