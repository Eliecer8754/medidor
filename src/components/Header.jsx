import React from 'react';
import logo from "../assets/logo.png"
export const Header = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-25">
        <div className="flex w-50 h-full justify-center items-center">
          <img src={logo} alt="" className='w-20 h-20 rounded-full mr-4' />
          <h1 className="text-xl font-bold text-gray-800">KiloSense</h1>
        </div>

        <nav className="hidden md:flex space-x-6">
          <button onClick={() => handleScroll('inicio')} className="text-gray-600 hover:text-gray-900">Inicio</button>
          <button onClick={() => handleScroll('servicios')} className="text-gray-600 hover:text-gray-900">Producto</button>
          <button onClick={() => handleScroll('acerca')} className="text-gray-600 hover:text-gray-900">Acerca</button>
          <button onClick={() => handleScroll('contacto')} className="text-gray-600 hover:text-gray-900">Compra</button>
        </nav>
      </div>
    </header>
  );
};
