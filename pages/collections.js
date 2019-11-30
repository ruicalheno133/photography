// pages/collections.js

import Layout from '../components/layout.js'
import { Container, Row, Col } from 'react-bootstrap'

const galleryStyle = {
    margin: '0 auto',
    marginTop: 50,
    width: '70%',
    textAlign: 'center',
}

const collectionContainer = {
    height: '300px',
    overflow: 'hidden',
    textAlign: 'center',
    color: 'black'
}

const imgStyle = {
    width: '60%',
    margin: '2vh'
}

const text = {
  textAlign: 'left',
}

const rowStyle = {
  backgroundColor: '#f9f8fd',
  justifyContent: 'center',
  alignItems: 'center',
}


export default function Collections() {
  return (
    <Layout>
        <div style={galleryStyle}>
            <Container>
              <a className="col-link" href="/collections/london">
              <Row style={rowStyle}>
                <Col xs={6}> <img src="/static/photography/london/picadilly-1.jpg" style={imgStyle}/> </Col>
                <Col xs={6}> London </Col>
              </Row>
              </a>
              <a className="col-link" href="/collections/budapest">
              <Row style={rowStyle}>
                <Col xs={6}> <img src="/static/photography/budapest/buda_over_pest-1.jpg" style={imgStyle}/> </Col>
                <Col xs={6}> Budapest </Col>
              </Row>
              </a>
              <a className="col-link" href="/collections/intoFilm">
              <Row style={rowStyle}>
                <Col xs={6}> <img src="/static/photography/intoFilm/into_film_1_13.jpg" style={imgStyle}/> </Col>
                <Col xs={6}> Into Film </Col>
              </Row>
              </a>
              <a className="col-link" href="/collections/lightAndShadow">
              <Row style={rowStyle}>
                <Col xs={6}> <img src="/static/photography/lightAndShadow/rcv-1.jpg" style={imgStyle}/> </Col>
                <Col xs={6}> A play of light and shadow</Col>
              </Row>
              </a>
              <a className="col-link" href="/collections/surf">
              <Row style={rowStyle}>
                <Col xs={6}> <img src="/static/photography/meoSurf/meoSurf4.jpg" style={imgStyle}/> </Col>
                <Col xs={6}> Liga Meo Surf - Matosinhos </Col>
              </Row>
              </a>
            </Container>
        </div>

    </Layout>
  )
}