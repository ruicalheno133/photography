import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import { Container, Row, Col } from 'react-bootstrap'

const imgStyle = {
    maxHeight: '100%',
    maxWidth: '100%'
}

  const galleryStyle = {
    margin: '0 auto',
    marginTop: 50,
    width: '100%',
    textAlign: 'center',
    height: '50vh'
}

const rowStyle = {
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex'
}

const buttons= {
    margin: '0 auto',
    width: '100%',
    textAlign: 'right'
  }


  const buttonStyle = {
    backgroundColor: 'transparent',
    border: '0px solid black',
    marginTop: '5vh',
    outline: 'none',
    cursor:'pointer'
  }

  const buttonStyleDisabled = {
    backgroundColor: 'transparent',
    opacity: 0.2,
    border: '0px solid black',
    marginTop: '5vh'
  }

  const buttonImgStyle = {
    width: '3vh',
    height:'3vh'
  }

  const btn = {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  }

class ImageCaroussel extends React.Component {
    

    constructor() {
        super();
        this.state = { currentImage: 0, lightboxIsOpen: false};
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount(){
    }

    handleScroll(event) {
      console.log(event) 
      switch( event.keyCode ) {
        case ESCAPE_KEY:
          console.log('ola');
          break;
      default: 
          break;
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
  


    render() {
        let prevBtn; 
        let nextBtn;
        
        if (this.state.currentImage != 0) {
          prevBtn = <button style={buttonStyle} onClick={this.gotoPrevious}>
          <img style={buttonImgStyle} src={"/static/arrow_left.png"}/>
            </button>;
        } else {
          prevBtn = <button style={buttonStyleDisabled} onClick={this.gotoPrevious} disabled>
          <img style={buttonImgStyle} src={"/static/arrow_left.png"}/>
            </button>;
        } 

        if (this.state.currentImage != this.props.photos.length - 1) {
          nextBtn = <button style={buttonStyle} onClick={this.gotoNext}>
          <img style={buttonImgStyle} src={"/static/arrow_right.png"}/>
          </button>
        } else {
          nextBtn = <button style={buttonStyleDisabled} onClick={this.gotoNext} disabled>
          <img style={buttonImgStyle} src={"/static/arrow_right.png"}/>
          </button>
        }

        return (
          
            <div style={galleryStyle}>
              <Row style={rowStyle}>
                <Col md={1} xs={2} style={btn}>
                {prevBtn}
                </Col>
                <Col md={10} xs={8} style={rowStyle}>

        <img key={this.state.currentImage} style={imgStyle} src={this.props.photos[this.state.currentImage].src} /> 

                </Col>

                <Col md={1} xs={2} style={btn}>

                {nextBtn}
                </Col>

              </Row>
            </div>
        )
    }
}

export default ImageCaroussel
