import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
      <Link to="/">
        <img src={assets.logo} className="w-36 h-auto" alt="" />
      </Link>

      <div>
      </div>

      <div>
      </div>

      <Menu className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer" />

    </div>
  )
}

export default Navbar