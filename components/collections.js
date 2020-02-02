// pages/collections.js

import Layout from '../components/layout.js'
import { Container, Row, Col } from 'react-bootstrap'
import {Fragment} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Reveal from 'react-reveal/Reveal'
import HorizontalPhotoList from './horizontalPhotoList.js'
const _ = require('lodash');

const londonPhotos = [
    {"orientation": 'V', "src":"/static/photography/london/tower-1.jpg"},
    {"orientation": 'V', "src":"/static/photography/london/museum-1.jpg"},
    {"orientation": 'H',"src": "/static/photography/london/bike-1.jpg"},
    {"orientation": 'V', "src":"/static/photography/london/higher-1.jpg"},
    {"orientation": 'V', "src":"/static/photography/london/together-1.jpg" },
    {"orientation": 'H',"src": "/static/photography/london/tate-1.jpg"},
    {"orientation": 'V', "src":"/static/photography/london/shard-1.jpg"},
    {"orientation": 'H',"src": "/static/photography/london/hats-1.jpg"},
    {"orientation": 'V', "src":"/static/photography/london/picadilly-1.jpg"}
]

const portraiturePhotos = [
    {"orientation": 'V', "src":"/static/photography/portraiture/bit-1.jpg"},
    {"orientation": 'V', "src":"/static/photography/portraiture/sara-1.jpg"},
    {"orientation": 'V', "src":"/static/photography/portraiture/tippler-1.jpg"},
    {"orientation": 'V', "src":"/static/photography/portraiture/sara-2.jpg"},
    {"orientation": 'H',"src": "/static/photography/portraiture/eu-1.jpg"},
]

const galleryStyle = {
    margin: '0 auto',
    marginTop: 50,
    width: '100%',
    textAlign: 'right'
}

const imgStyle = {
    height: '70vh',
    position: 'absolute',
    top: '0em',
    right: '0em' 
}

const text = {
  textAlign: 'left'
}

const rowStyle = {
  //backgroundColor: '#f9f8fd',
  backgroundColor: 'red',
  justifyContent: 'left',
  alignItems: 'top',
  textAlign: 'left',
  height:'40em'
}

const titleStyle = {
  fontSize: 'calc(15px + 7vw)',
  position: 'absolute',
  color: 'black',
  top: '10vh',
  left: '1em',
  backgroundColor: 'transparent'
}

const numberStyle1 = {
    fontSize: 'calc(40vh)',
    position: 'absolute',
    color: 'black',
    top: '-10vh',
    left: '10vw',
    //backgroundColor: 'blue',
  }

const numberStyle2 = {
    fontSize: 'calc(40vh)',
    position: 'absolute',
    backgroundColor: 'black',
    top: '-10vh',
    left: '10vw',
    
    //backgroundColor: 'blue',
  }

const Scroll = {
    borderRadius: '50%',
    border: '1px solid black',
    top: '3em',
    left: '0',
    position:'absolute'
}

const titleStyle1 = {
    fontSize: '10em',
    position: 'absolute',
    top: '1em',
    left: '1em',
    //backgroundColor: 'blue'
  }

  const titleStyle2 = {
    fontSize: '10em',
    position: 'absolute',
    top: '2em',
    left: '1em',
    //backgroundColor: 'blue'
  }

  const titleStyle3 = {
    fontSize: '10em',
    //backgroundColor: 'blue'
    position: 'absolute',
    top: '3em',
    left: '1em',
  }

const container = {
    position: 'relative',
    width:'100%'
    
}

class Collections extends React.Component {

    constructor() {
        super();
        this.state = { collectionIndex: 0, show: 0, isMoving: false, show: false};
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollToStart = this.scrollToStart.bind(this);
    }

    scrollToStart () {
        window.scrollTo({left:0, behavior: 'smooth'})
        setTimeout(()=> {this.setState({show: false})}, 1300)        
    }

    componentDidMount(){
        document.addEventListener('wheel', this.handleScroll)
    }


    handleScroll(event) {

        if (this.state.show) {
            if (window.pageXOffset == 0) {
                this.setState({show: false})
            }
            return ;
        }


        if (this.state.isMoving || this.state.show) {
            return ;
        } else {
        const delta = Math.sign(event.deltaY);
        if (delta > 0 && this.state.collectionIndex < 1) {
            this.setState({ collectionIndex: this.state.collectionIndex + 1})
            
        }
        else if (delta < 0 && this.state.collectionIndex > 0){
            this.setState({collectionIndex: this.state.collectionIndex - 1})
        }
        this.setState({isMoving: true})

        setTimeout(function() {this.setState({isMoving: false})}.bind(this), 1000)
        }

    }

    openLightbox(event, obj) {
        this.setState({
          currentImage: obj.index,
          lightboxIsOpen: true,
        });
    }

    closeLightbox() {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
        });
    }
      
    gotoPrevious() {
        this.setState({
          currentImage: this.state.currentImage - 1,
        });
    }
    
    gotoNext() {
        this.setState({
          currentImage: this.state.currentImage + 1,
        });
    }

    componentWillUnmount() {
        console.log('bye bye')
    }
  
    


    render() {
        
        const collectionList = [
            <CSSTransition
            key={0}
            in={true}
                        timeout={2000}
                        classNames="collection-transition"
                    >
            <div key={0} style={container}>
                  
            <a key={0} className="col-link" onClick={async ()=> {await this.setState({show: true}); window.scrollTo({left: window.innerWidth, behavior: 'smooth'})}}>
                <div className="imgContainer">
                <img  style={imgStyle} className="img" src={process.env.BACKEND_URL + "/static/photography/underwater-1.jpg"} />
                </div>
                <h1 style={titleStyle} className="text"> London </h1>
            </a>
            {this.state.show && <HorizontalPhotoList photos={londonPhotos} goBack={this.scrollToStart} />}
            </div>
            </CSSTransition>
            ,
            <CSSTransition
            key={1}
            in={true}
                        timeout={2000}
                        classNames="collection-transition"
                    >
            <div key={0} style={container}>
                  
            <a key={0} className="col-link" onClick={async ()=> {await this.setState({show: true}); window.scrollTo({left: window.innerWidth, behavior: 'smooth'})}}>
                <div className="imgContainer">
                    <img style={imgStyle} className="img" src={process.env.BACKEND_URL + "/static/photography/portraiture/sara-3.jpg"} />
                </div>
                <h1 style={titleStyle} className="text">
                     <span className="p" >P</span> 
                     <span className="o">o</span> 
                     <span className="r">r</span> 
                     <span className="t">t</span> 
                     <span className="r2">r</span> 
                     <span className="a">a</span> 
                     <span className="i">i</span> 
                     <span className="t2">t</span> 
                     <span className="u">u</span> 
                     <span className="r3">r</span>
                     <span className="e">e</span>  
                     </h1>
                {/*<h1 style={numberStyle2} className="number blend"> 2 </h1>*/}
            </a>
            {this.state.show && <HorizontalPhotoList photos={portraiturePhotos} goBack={this.scrollToStart} />}
            </div>
            </CSSTransition>
        ]

        return (

            <div style={galleryStyle}>
                { this.state.collectionIndex == 0 &&
                                <div className={Scroll}>
                                <h5 className="blink" style={{position:'absolute', top: '90%',left:'50%', color: 'black', textAlign: 'center', margin:'0 auto'}}>Scroll</h5>
                                </div>
                }

                <TransitionGroup appear component={null}>
                {collectionList[this.state.collectionIndex]}
                </TransitionGroup>
        </div>

        )
    }
}

export default Collections
