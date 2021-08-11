import React from 'react'

const YoutubeVideo = ({ src }) => (
  <iframe
    title="titulo"
    className="w-full"
    id="ytplayer"
    type="text/html"
    height="320"
    src={src}
    frameBorder="0"
    allow="autoplay;"
  />
)

export default YoutubeVideo
