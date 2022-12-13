import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'
import logo from '../assets/logo.png'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import '../styles/global.css'
import { getWhatsUrl } from '../utils'
import { CTA_WA_MESSAGES } from '../utils/constants'

const Navigation = () => {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img className="h-20 w-auto" src={logo} alt="logo" />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div as="nav" className="hidden md:flex space-x-10">
            <a
              href="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="/#unidades"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Unidades
            </a>
            <a
              href="/#especialidades"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Especialidades
            </a>
            <a
              href="/#convenios"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Convênios
            </a>
            <a
              href="/blog"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Blog
            </a>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href={getWhatsUrl(
                CTA_WA_MESSAGES.ctaBanner1,
                'https://wa.me/5547992626100'
              )}
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="/"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Home
                </a>
                <a
                  href="/#unidades"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Unidades
                </a>
                <a
                  href="/#especialidades"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Especialidades
                </a>
                <a
                  href="/#convenios"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Convênios
                </a>
                <a
                  href="/blog"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Blog
                </a>
              </div>
              <div>
                <a
                  href={getWhatsUrl(
                    CTA_WA_MESSAGES.ctaBanner1,
                    'https://wa.me/5547992626100'
                  )}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Whatsapp
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

const Index = () => {
  return (
    <div>
      <main>
        <Navigation />
        <Contact />
        <Footer showMenu={false} />
      </main>
    </div>
  )
}

export default Index
