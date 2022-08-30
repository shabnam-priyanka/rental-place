import React from 'react';
import logo from '../picture/logo.jpg'
const Navbar = () => {
    return (
       
           <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center"
            >
                <a href="index.html">
                    <img
                        className="h-10 w-10 rounded-full"
                        src={logo}
                        alt="Learn with Sumit"
                    />
                </a>
            </div>
        </nav> 
      
    );
};

export default Navbar;