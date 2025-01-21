import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import imagegmail from '../images/imagegmail.jpg';
import BG from '../images/BG.png';
import hompage1 from '../images/home page 1.png';
import hompage2 from '../images/home page 2.png';
import hompage3 from '../images/home page 3.png';
import hompage4 from '../images/home page 4.png';
import hompage5 from '../images/home page 5.png';
import hompage6 from '../images/home page 6.png';
import hompage7 from '../images/home page 8b.png';
function Home(){
// Array of services with images
const services = [
  {
    title: 'Administration',
  
    image: hompage1,
    link: '/addminstrator', // Use route path directly if using react-router
  },
  {
    title: 'Application Setup',
    image: hompage2,
    link: '/application', 
  },
  {
    title: 'Accounts Management',

    image: hompage3,
    link: '/accont', 
  },
  {
    title: 'Inventory Management',

    image: hompage4,
    link: '/Dashborad', 
  },
  {
    title: 'Purchase Management',
  
    image: hompage5,
    link: '/purchasepage', 
  },
  {
    title: 'Sales Management',

    image: hompage6,
    link: '/salepage', 
  }, {
    title: 'Projects Management',
    
    image: hompage7,
    link: '/projectpage', 
  },
  {
    title: 'ALL Modules',
    
    image: hompage1,
    link: '/allmodule', 
  },
];
return (
  <>
    <div className="bg-custompink h-16 flex items-center px-4">
      <h1 className="text-lg font-bold text-start mb-0 flex-1">
        <span className="text-white">Golden </span>
        <span className="text-white">Lake</span>
      </h1>
      <img
        src={imagegmail}
        alt="Golden Lake Logo"
        className="h-8 w-8 object-contain rounded-full mr-3"
      />
    </div>

    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${BG})`, // Use backticks to form the template string
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      

      <div className="container mx-auto  py-10 px-4">
        <div className="py-10">
        <h1 className="text-4xl font-bold text-center mb-0 flex-1">
          <span className="text-custompink">Golden </span>
          <span className="text-custompink">Lake</span>
        </h1>
        <p className="text-center mb-10 text-gray-600 py-7 px-7">
          Streamline your business with our comprehensive applications, featuring robust functionalities for sales, purchase, accounts, and team management.
        </p>
      </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105"
              style={{ width: '100%', maxWidth: '18rem' }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="text-custompink hover:text-custompink text-sm font-medium"
              >
                GO To →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

}

export default Home;
