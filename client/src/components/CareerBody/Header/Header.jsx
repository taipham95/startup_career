import React from 'react';
import "./Header.css";
const Header=()=>{
    return(
        <div >
          <img className="w-full bg-cover bg-center relative" src="https://skymavis.com/_app/immutable/assets/background-desktop-2b910574.png" />
          <div className='absolute w-1/3 left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2  text-center '>
                <div className=' text-4xl font-bold mb-6'>Careers at Sky Mavis</div>
                <div className='text-2xl'>We're looking for adventurers, thinkers, & builders to help usher in a paradigm shift in how games treat their users</div>
          </div>
        </div>
    );
}
export default Header;