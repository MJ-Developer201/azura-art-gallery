import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import ArtistImage from '/img/marcos-paulo-prado-3Gke1Nhw_XI-unsplash.jpg'
import EventImage from '/img/galleryphoto4.jpg'
import '../css/eventStyles.css'

export default function Events() {
  return (
    <div className='event-container'>
      <div className='background-img'></div>
      <Container>
        <h4 className='section-title'>Upcoming Events</h4>

        <Card style={{ border: 'none' }} className='event-card'>
          <Card.Img
            variant='top'
            style={{ maxHeight: 600, maxWidth: '100%' }}
            src={EventImage}
            alt='Artist Talk Event'
            className='event-image'
          />
          <Card.Body>
            <Card.Title style={{ fontSize: '2rem', fontWeight: '600' }}>
              Artist Talk: Exploring Abstract Expressionism
            </Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>December 12, 2023 | 1:30 PM - 3:30 PM</Card.Subtitle>
            <Card.Text style={{ fontSize: '1.5rem' }}>
              Join us for an engaging artist talk as we delve into the world of abstract expressionism. Our
              featured guest artist will share insights into the creative process, inspiration, and the
              significance of abstract art. Engage in a Q&A session and expand your understanding of
              contemporary art.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}
