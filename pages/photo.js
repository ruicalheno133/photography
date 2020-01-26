// pages/about.js

import Layout from '../components/layout.js'
import { Container, Row, Col } from 'react-bootstrap'
import { AnimatePresence } from 'framer-motion';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const imgStyle = {
  width: '100%'
}

const justifyLeft = {
  textAlign: 'left'
}

export default function About() {
  return (
    <Layout key={0}>
        <div className="info" style={{opacity: 0}}>
        
            <Container>
              <Row>
                <Col md={5} xs={12}>
                <img id="morph" style={imgStyle} src="/static/photography/metro-1.jpg" />
                </Col>
                <Col md={1} xs={0}>
                </Col>
                <Col md={5} xs={12}> 
                <p style={justifyLeft}>
                I am an enthusiast photographer based in Braga, Portugal. 
                </p>
                <p style={justifyLeft}>
                  I balance between digital and film photography roaming the world with my Olympus OMD-EM10 II and my Minolta X700.
                </p>
                <p style={justifyLeft}>
                  Currently beginning my photography journey, I am yet to discover my own style and signature, so on the meantimes I just 
                  photograph what I mind. 
                </p>
                <p style={justifyLeft}>
                  Feel free to contact if you have some project in mind.
                </p>
                
                </Col>
              </Row>
            </Container>
        </div>

    </Layout>
  )
}