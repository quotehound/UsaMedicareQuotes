
import React, { Component } from 'react'


import Logo from './Assets/usmq.png';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="relative py-4 px-4 lg:px-10 bg-white">
    <div className="flex justify-between items-center">
      <a className="text-xl text-white font-semibold" href="#" data-config-id="brand">
        <img className="h-12" src={Logo} alt="" />
      </a>
       

      <ul className="md:flex md:flex-row" id="mobileMenu">
  <li className="pr-5"> 
    <a className="text-center inline-block px-2 py-2 text-sm text-white font-bold leading-loose bg-blue-400 hover:bg-blue-600 rounded transition duration-200" href="tel:8887013068" data-config-id="04_button">888-701-3068 | TTY: 711</a> 
  </li>  

  <li className="inline-block px-2 py-2 text-sm text-gray-500 font-bold leading-loose"> 9AM - 6PM ET Monday - Friday </li>

</ul>



    </div>

  </nav>
            </div>
        )
    }
}


export default NavBar