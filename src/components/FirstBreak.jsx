import React from 'react'

export default function FirstBreak() {
  return (
    <>
      <div style={{}} className='first-break-container'>
        <div className='first-break'>
          <h3 className='first-break-h3'>"Embrace the Beauty of Diversity"</h3>
          <p className='first-break-p' style={{ lineHeight: '1.6', textAlign: 'center' }}>
            In our gallery museum, we celebrate the power of diversity through art. Encounter an array of
            styles, themes, and cultures that unite to form a tapestry of creativity. Appreciate the
            uniqueness of each artwork as it reflects the essence of the world's vibrant mosaic.
          </p>
        </div>
        <div
          className='sitting-image'
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <img className='sitting-image' style={{ maxWidth: '100%' }} src='/woman-sitting.jpg' alt='' />
        </div>
      </div>
    </>
  )
}
