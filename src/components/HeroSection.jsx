import React, { useState } from 'react'
import { Button, Modal, Backdrop, Fade } from '@mui/material'
import { Elements, useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Link, useNavigate } from 'react-router-dom'
import '../css/style.css'

const HeroSection = () => {
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()

  return (
    <div id='hero-section-id' style={{ color: 'white' }} className='background-picture'>
      <div className='heading'>
        <h1 style={{ letterSpacing: '0.3rem', fontWeight: '540' }}>
          {' '}
          Azura <br />
          Art Gallery
        </h1>
      </div>
      <div className='hero-section '>
        <div className=''>
          <h3 style={{ textAlign: 'center', marginBottom: '-55px' }}>
            <div className='hero-paragraph'>
              <p className='hero-first-p' style={{ fontSize: '1.5rem' }}>
                Azure Art is a haven for modern and sophisticated artwork,where creativity collides with
                captivating visuals <br className='break' />
              </p>
              <p style={{ fontSize: '1.5rem' }}>
                Dive into a world of stunning artistic expressions,features a wide range of styles and
                subjects.
                <br className='break' />
              </p>
              <p style={{ fontSize: '1.5rem' }}>
                Embrace the bold and the beautiful -- come experience the new era of art at Azure.
              </p>
              <div className='btn-container'>
                <Link to={'/member'}>
                  <button
                    style={{ padding: '0.8rem 2.5rem', fontSize: '1rem', fontWeight: '600' }}
                    className='button'
                    onClick={() => useNavigate('/member')}
                  >
                    Buy Ticket
                  </button>
                </Link>
              </div>
            </div>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
