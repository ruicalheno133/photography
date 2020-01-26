// pages/about.js

import Layout from '../components/layout.js'
import { Container, Row, Col } from 'react-bootstrap'
import { AnimatePresence } from 'framer-motion';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const imgStyle = {
  width: '100%',
  marginBottom: '3em',

}

const justifyLeft = {
  textAlign: 'left',
  fontSize: 'calc(10px + 1vh)'
}

const refStyle = {
  backgroundColor: 'transparent'
}

export default function About() {
  return (
    <Layout key={0} renderFooter={true}>
      {/*
                             <CSSTransition
                        key={0}
                        in={true}
                                    timeout={8000}
                                    classNames="logo"
                                    appear

                                >
                                  <div style={{margin: '0 auto', opacity: 0}}>
                                   <h2 className="r" style={{marginRight: '1vw', opacity:0, color: 'black', display:'inline-block'}}> R </h2>
                                   <h2 className="u" style={{marginRight: '1vw',opacity:0, color: 'black', display:'inline-block'}}> u </h2>
                                   <h2 className="i" style={{marginRight: '1vw',opacity:0, color: 'black', display:'inline-block'}}> i </h2>
                                   <h2 className="c" style={{marginRight: '1vw',opacity:0, color: 'black', display:'inline-block'}}> C </h2>
                                   <h2 className="a" style={{marginRight: '1vw',opacity:0, color: 'black', display:'inline-block'}}> a </h2>
                                   <h2 className="l" style={{marginRight: '1vw',opacity:0, color: 'black', display:'inline-block'}}> l </h2>
                                   <h2 className="h" style={{marginRight: '1vw',opacity:0, color: 'black', display:'inline-block'}}> h </h2>
                                   <h2 className="e" style={{marginRight: '1vw',opacity:0, color: 'black', display:'inline-block'}}> e </h2>
                                   <h2 className="n" style={{marginRight: '1vw',opacity:0, color: 'black', display:'inline-block'}}> n </h2>
                                   <h2 className="o" style={{marginRight: '1vw',opacity:0, color: 'black', display:'inline-block'}}> o </h2>
                                   </div>
                                </CSSTransition>
                                <CSSTransition
                        key={0}
                        in={true}
                                    timeout={8000}
                                    classNames="logo-down"
                                    appear

                                >
                                  <div style={{position:'absolute', top:'53%', left:'50%',  opacity: 0}}>
                                   <h2 style={{color: 'grey'}}> Photography </h2>
                                   </div>
                                </CSSTransition>
      */}
                       <CSSTransition
                        key={0}
                        in={true}
                                    timeout={2000}
                                    classNames="about-transition"
                                    appear

                                >
        <div className="info" style={{opacity: 0}}>
        
            <Container >
              <Row>
                <Col md={5} xs={12}>
                  <a href="/photo" style={refStyle}>
                <img style={imgStyle} src="/static/photography/me.jpg" />
                </a>
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
        </CSSTransition>

    </Layout>
  )
}