import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";



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
            <div style={this.props.galleryStyle}>
                <Gallery photos={this.props.photos} 
                         onClick={this.openLightbox} 
                         columns={this.props.columns} 
                         margin={this.props.margin} />
                <Lightbox images={this.props.photos}
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
