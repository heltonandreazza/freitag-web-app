import { ClockIcon } from '@heroicons/react/solid'
import React from 'react'
import { getWhatsUrl, openWhatsUrl } from '../../utils'
import { CTA_WA_MESSAGES } from '../../utils/constants'
import Button from '../Button'

const CTABanner = () => (
  <div className='flex py-8 bg-blue-50 '>
    <div className='hidden sm:flex flex-1 px-4 justify-end items-center'>
      <ClockIcon className='h-40 w-40 text-blue-500' />
    </div>
    <div className='flex-1 px-4 ng-blue-400'>
      <h2 className='text-center sm:text-left text-2xl font-extrabold tracking-tight text-gray-900'>
        <span className='block text-blue-500 mb-2 text-3xl'>
          Consultas e Exames
        </span>
        <a
          href={getWhatsUrl(
            CTA_WA_MESSAGES.ctaBanner1,
            'https://wa.me/5547992626100'
          )}
          target='_blank'
        >
          <span className='underline text-blue-400 hover:text-blue-500 block mb-2'>
            Timbó - (47) 99262-6100
          </span>
        </a>
        <a
          href={getWhatsUrl(
            CTA_WA_MESSAGES.ctaBanner2,
            'https://wa.me/5547991689605'
          )}
          target='_blank'
        >
          <span className='underline text-blue-400 hover:text-blue-500 block mb-2'>
            Indaial - (47) 99168-9605
          </span>
        </a>
      </h2>
    </div>
  </div>
)

export default CTABanner
