import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const Author = ({ author }) => (
  <div className="relative bg-white py-16 sm:py-24">
    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
      <div className="relative sm:py-16 lg:py-0">
        <div
          aria-hidden="true"
          className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
        >
          <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 lg:right-72" />
          <svg
            className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
          {/* Testimonial card */}
          <div className="relative shadow-xl overflow-hidden">
            <GatsbyImage
              className="absolute inset-0 h-full w-full object-cover"
              image={author.image.gatsbyImageData}
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
        {/* Content area */}
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <a href={author.urlInstagram}>
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl flex items-center hover:text-blue-500">
              {author.name}
              <div className="text-blue-400 hover:text-blue-500 ml-4">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </h2>
          </a>
          <div
            className="mt-6 text-gray-400 space-y-6 text-lg"
            dangerouslySetInnerHTML={{ __html: author.bio.childMarkdownRemark.html }}
          />
        </div>
        {/* Stats section */}
        <div className="mt-8">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
            <div key="Desde" className="border-t-2 border-gray-100 pt-6">
              <dt className="text-base font-medium text-gray-400">Desde</dt>
              <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                {author.createdAt?.split('-')[0]}
              </dd>
            </div>
            <div key="Postagens" className="border-t-2 border-gray-100 pt-6">
              <dt className="text-base font-medium text-gray-400">Postagens</dt>
              <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                {author.post?.length}
              </dd>
            </div>
          </dl>
          <div className="mt-10">
            <a href="/authors" className="text-base font-medium text-blue-400 hover:text-blue-500">
              Conheça a nossa equipe <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Author
