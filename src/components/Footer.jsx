import React from 'react'
import { Facebook, Twitter, Pinterest, Instagram } from '@mui/icons-material'
import '../css/style.css'

export default function Footer() {
  return (
    <footer id='footer' className='footer-container'>
      <div className=' p-4'>
        <div className='row'>
          <div className='col-lg-4 mb-5 our-mission'>
            <h5 style={{ textAlign: 'center' }} className='text-uppercase mb-4'>
              Our Mission
            </h5>
            <p className='showcase-text'>
              To showcase the artistic journey and celebrate the creativity of artists from different
              backgrounds and styles.
            </p>
          </div>

          <div className='col-lg-4 mb-5'>
            <h5 style={{ textAlign: 'center' }} className='text-uppercase mb-4'>
              Location and Contact
            </h5>
            <div style={{ marginRight: '2.5rem', textAlign: 'center' }}>
              <ul style={{ listStyle: 'none' }} className='fa-ul'>
                <li className='mb-3'>
                  <span className='fa-li'>
                    <i className='fas fa-home'></i>
                  </span>
                  <span className='ms-2'>10351 Gallery Street Washington, DC 10012, US</span>
                </li>
                <li className='mb-3'>
                  <span className='fa-li'>
                    <i className='fas fa-envelope'></i>
                  </span>
                  <span className='ms-2'>art-gallery@azura.com</span>
                </li>
                <li className='mb-3'>
                  <span className='fa-li'>
                    <i className='fas fa-print'></i>
                  </span>
                  <span className='ms-2'>Phone : 56202-495-3923</span>
                </li>
                <li className='mb-3'>
                  <span className='fa-li'>
                    <i className='fas fa-phone'></i>
                  </span>
                  <span className='ms-2'>Fax : 617 9874 5433</span>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-lg-4 mb-5'>
            <h5 style={{ textAlign: 'center' }} className='text-uppercase mb-4'>
              Opening hours
            </h5>
            <table className='table text-center text-black'>
              <tbody className='font-weight-normal'>
                <tr>
                  <td>Mon - Thu:</td>
                  <td>8am - 5pm</td>
                </tr>
                <tr>
                  <td>Fri - Sat:</td>
                  <td>8am - 7pm</td>
                </tr>
                <tr>
                  <td>Sunday:</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '2rem' }} className=''>
        <a type='button' className='btn btn-floating btn-lg'>
          <Facebook />
        </a>

        <a type='button' className='btn btn-floating btn-lg'>
          <Twitter />
        </a>

        <a type='button' className='btn btn-floating btn-lg'>
          <Pinterest />
        </a>

        <a type='button' className='btn btn-floating btn-lg'>
          <Instagram />
        </a>
      </div>

      <div className='text-center p-3' style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
        Location:10351 Gallery Street,Washington, DC 10012, US | Email: art-gallery@azura.com | Phone:
        555-234-5495 | Fax: +612 9874 5433
      </div>
    </footer>
  )
}
