import React from 'react'
import { Link } from 'react-router-dom'

export default function SecondBreak() {
  return (
    <div className='schedule-container'>
      <div className='schedule-section'>
        <div className='section-title'>Become a Member</div>
        <div className='section-description'>
          Unlock exclusive benefits and discounts by becoming a member.
        </div>
        <Link to={'/member'}>
          <div>
            <button className='action-button'>Join Now</button>
          </div>
        </Link>
        <div className='become-a-member-image'>
          {' '}
          <img style={{ maxHeight: 500, maxWidth: 300 }} src='/picture-wall.jpg' alt='' />
        </div>
      </div>

      <div className='schedule-section'>
        <div className='section-title'>Join our Events</div>
        <div className='section-description'>Discover our intricately crafted and exciting events.</div>
        <Link to={'/events'}>
          <button className='action-button view-tours-button'>View Events</button>
        </Link>
        <div className='become-a-member-image middle-image'>
          <img style={{ maxHeight: 500, maxWidth: 300 }} src='/brown-gallery.jpg' alt='' />
        </div>
      </div>

      <div className='schedule-section'>
        <div className='section-title'>Buy a Ticket</div>
        <div className='section-description'>Experience the artistry and charm of our museum.</div>
        <div>
          <Link to={'/member'}>
            <button className='action-button'>Buy Now</button>
          </Link>
        </div>
        <div className='become-a-member-image'>
          <img
            style={{ maxHeight: 500, maxWidth: 300 }}
            src='/thought-catalog-Nv-vx3kUR2A-unsplash.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}
