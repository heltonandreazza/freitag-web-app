import React from 'react'

const Button = ({ children, ...otherProps }) => (
  <button
    type="button"
    className="mt-3 mr-3 px-4 py-3 border border-transparent text-base font-medium text-white bg-blue-500 shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...otherProps}
  >
    {children}
  </button>
)

export default Button
