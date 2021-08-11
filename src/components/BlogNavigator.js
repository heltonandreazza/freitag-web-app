import React from 'react'
import logo from '../assets/logo.png'

const Navigator = ({ showMenuMobile, onClickOpenMenuMobile, onClickCloseMenuMobile }) => (
  <div className="container mx-auto h-24 flex items-center justify-between 2xl:px-32">
    <a href="/">
      <img className="h-16 ml-2 sm:ml-0" src={logo} alt="logo" />
    </a>
    <nav className="hidden sm:flex items-center justify-between">
      <a className="px-4 text-blue-400 hover:text-blue-500" href="/blog">
        Blog
      </a>
      <a className="px-4 text-blue-400 hover:text-blue-500" href="/authors">
        Equipe
      </a>
    </nav>
    <div className="mr-2 flex items-center md:hidden">
      <button
        type="button"
        className="bg-blue-100 p-2 inline-flex items-center justify-center text-blue-400 hover:text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        aria-expanded="false"
        onClick={onClickOpenMenuMobile}
      >
        <span className="sr-only">Abrir menu</span>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    {/* ABSOLUTE MOBILE MENU */}
    <div
      className={`${
        showMenuMobile ? '' : 'hidden'
      } absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10`}
    >
      <div className="shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="px-5 pt-4 flex items-center justify-between">
          <a href="/blog">
            <img className="h-8 w-auto" src={logo} alt="logo" />
          </a>
          <div className="-mr-2">
            <button
              type="button"
              onClick={onClickCloseMenuMobile}
              className="bg-white p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="px-2 pt-2 pb-3">
          <a
            href="/authors"
            className="block px-3 py-2 text-base font-medium text-blue-400 hover:text-blue-500 hover:bg-blue-50"
          >
            Equipe
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Navigator
