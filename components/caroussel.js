import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

const imgStyle = {
    maxHeight: '100%',
    maxWidth: '100%'
}

  const galleryStyle = {
    margin: '0 auto',
    marginTop: 50,
    width: '100%',
    textAlign: 'center',
    height: '100%'
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

class ImageCaroussel extends React.Component {
    

    constructor() {
        super();
        this.state = { currentImage: 0, lightboxIsOpen: false};
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    componentDidMount(){

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
                <img style={imgStyle} src={this.props.photos[this.state.currentImage].src} />
                <div style={buttons}>
                  
                {prevBtn}
                {nextBtn}
                </div>
            </div>
        )
    }
}

export default ImageCaroussel
