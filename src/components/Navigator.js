import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'
import { SocialIcon } from 'react-social-icons'
import logo from '../assets/logo.png'
import { URLS } from '../utils/constants'

const navigation = [
  { name: 'Unidades', href: '#unidades' },
  { name: 'Especialidades', href: '#especialidades' },
  { name: 'Contato', href: '#atendimento' },
  { name: 'Convênios', href: '#convenios' },
  { name: 'Blog', href: '/blog' },
  { name: 'Corpo clínico', href: '/equipe' },
]

const Navigator = () => (
  <Popover className='relative bg-white'>
    {({ open }) => (
      <>
        <div className='flex justify-between items-center max-w-7xl mx-auto px-4 py-2 sm:px-6 md:justify-start md:space-x-10 lg:px-8'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <a href='/'>
              <img className='h-28' src={logo} alt='logo' />
            </a>
          </div>
          {/* mobile menu */}
          <div className='-mr-2 -my-2 md:hidden'>
            <Popover.Button className='bg-white p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400'>
              <span className='sr-only'>Open menu</span>
              <MenuIcon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter='duration-200 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Popover.Panel
              focus
              static
              className='absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
            >
              <div className='shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
                <div className='pt-5 pb-6 px-5'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <img className='h-24 w-auto' src={logo} alt='logo' />
                    </div>
                    <div className='-mr-2'>
                      <Popover.Button className='bg-white p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400'>
                        <span className='sr-only'>Close menu</span>
                        <XIcon className='h-6 w-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className='py-6 px-5'>
                  <div className='grid grid-cols-2 gap-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='text-base font-medium text-gray-900 hover:text-blue-400'
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='hidden md:flex text-base font-medium text-gray-400 hover:text-blue-400'
            >
              {item.name}
            </a>
          ))}
          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <SocialIcon
              className='flex whitespace-nowrap mr-2'
              url={URLS.facebook}
            />
            <SocialIcon
              className='flex whitespace-nowrap mr-2'
              url={URLS.instagram}
            />
            <SocialIcon
              className='flex whitespace-nowrap '
              url={URLS.youtube}
            />
          </div>
        </div>
      </>
    )}
  </Popover>
)
export default Navigator
