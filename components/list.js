import React from "react";

const imgStyle = {
    maxHeight: '100%',
    maxWidth: '100%',
    marginTop: '3vh'
}

  const galleryStyle = {
    margin: '0 auto',
    width: '100%',
    textAlign: 'center',
    height: '100%'
}


class ImageList extends React.Component {
    constructor() {
        super();
        this.state = { currentImage: 0, lightboxIsOpen: false};
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
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
      

    render() {
        const photos = []

        this.props.photos.map((photo, index) => {
            photos.push(<img key={index} style={imgStyle} src={photo.src} />)
        })

        return (
            <div style={galleryStyle}>
                {photos}
            </div>
        )
    }
}

export default ImageList
