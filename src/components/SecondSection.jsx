import React from 'react'

export default function SecondSection() {
  return (
    <div className='second-section-picture'>
      <div className='second-section-div'>
        <h3 className='second-section-h3'>"Discover the Artist's Vision"</h3>
        <p className='second-section-p'>
          Step into our concept art room, where creativity knows no bounds. Immerse yourself in the vivid
          imaginations of talented artists as they bring worlds to life on canvas. From futuristic cities to
          fantastical landscapes, every window in this gallery offers a glimpse into the artist's vision.
        </p>
      </div>
      <div className='second-section-image'>
        <img style={{ maxWidth: '100%' }} src='/white-gallery.jpg' alt='' />
      </div>
    </div>
  )
}
