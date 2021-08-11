import { ClockIcon } from '@heroicons/react/solid'
import React from 'react'
import { openWhatsUrl } from '../../utils'
import { CTA_WA_MESSAGES } from '../../utils/constants'
import Button from '../Button'

const CTABanner = () => (
  <div className="flex py-8 bg-blue-50 ">
    <div className="hidden sm:flex flex-1 px-4 justify-end">
      <ClockIcon className="h-40 w-40 text-blue-400" />
    </div>
    <div className="flex-1 px-4 ng-blue-400">
      <h2 className="text-center sm:text-left text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block text-blue-400 mb-2">Consultas e Exames</span>
        <span className="block mb-2">(47) 99262-6100</span>
        <Button onClick={() => openWhatsUrl(CTA_WA_MESSAGES.headerTopCta)}>Fale conosco</Button>
      </h2>
    </div>
  </div>
)

export default CTABanner
