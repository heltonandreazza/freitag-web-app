import React from 'react'
import Button from './Button'

const CardContainer = ({ children, onClick }) => (
  <div
    onClick={onClick}
    className="flex flex-col items-center shadow-lg overflow-hidden bg-white cursor-pointer"
  >
    {children}
  </div>
)
const CardHeader = ({ children }) => <div className="flex-shrink-0">{children}</div>
const CardContent = ({ children }) => (
  <div className="flex-1 bg-white p-6 flex flex-col">
    <div className="flex-1">{children}</div>
  </div>
)
const CardFooter = ({ children }) => (
  <div className="flex-1 bg-white px-6 pb-6 flex items-center justify-center">{children}</div>
)
const CardContentSubtitle = ({ children, href = '#' }) => (
  <p className="text-sm font-medium text-blue-600">
    <a href={href} className="hover:underline">
      {children}
    </a>
  </p>
)
const CardContentDescription = ({ title, description, href = '#' }) => (
  <div href={href} className="block mt-2 text-center">
    <p className="text-xl font-semibold text-gray-900">{title}</p>
    <p className="mt-3 text-base text-gray-500">{description}</p>
  </div>
)

const Card = ({
  imageProps: { src, alt },
  subtitle,
  title,
  description,
  ctaTitle,
  ctaOnClick,
  onClick,
}) => (
  <CardContainer onClick={onClick}>
    <CardHeader>
      <img className="h-48 w-full object-cover" src={src} alt={alt} />
    </CardHeader>
    <CardContent>
      {subtitle && <CardContentSubtitle>{subtitle}</CardContentSubtitle>}
      <CardContentDescription title={title} description={description} />
    </CardContent>
    <CardFooter>
      <Button onClick={ctaOnClick}>{ctaTitle}</Button>
    </CardFooter>
  </CardContainer>
)

export default Card
