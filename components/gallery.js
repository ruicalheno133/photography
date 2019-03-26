import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

const photos = [
  {
    src: "/static/photography/hats.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/static/photography/tate-1.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/static/photography/shard-1.jpg",
    width: 3,
    height: 4
  },
  {
    src: "/static/photography/metro-1.jpg",
    width: 2,
    height: 3
  },
  {
    src: "/static/photography/picadilly-1.jpg",
    width: 3,
    height: 2
  },
  {
    src: "/static/photography/underwater-1.jpg",
    width: 3,
    height: 4
  },
  {
    src: "/static/photography/higher-1.jpg",
    width: 3,
    height: 4
  }

];

const galleryStyle = {
    margin: '0 auto',
    marginTop: 50,
    width: '70%'
}

class PhotoGallery extends React.Component {

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
        return (
            <div style={galleryStyle}>
                <Gallery photos={photos} onClick={this.openLightbox} />
                <Lightbox images={photos}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                />
            </div>
        )
    }
}

export default PhotoGallery
