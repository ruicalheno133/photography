import React from "react";
import Layout from './layout.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PhotoGallery from '../components/gallery.js';
import ImageCaroussel from '../components/caroussel.js'
import ImageList from '../components/list.js'
import window from 'global'

const modal = {
  position:'fixed',
  width: '100vw',
  height: '100%',
  backgroundColor: 'rgba(46, 49, 49, 0.8)' ,
  textAlign: 'center',
  top: 0,
  alignItems: 'center',
  display: 'flex',
  zIndex: '100000000', 

}

const image = {
    margin: '0 auto',
    height: '80vh',
}



class PhotoModal extends React.Component {

    constructor() {
        super();
    }

    componentDidMount(){

    }

    render() {
        if(this.props.show) {
            return (
                <div style={modal} className="modal" onClick={this.props.click}>
                    <img style={{...image,...{left: this.props.offset}}} src={this.props.photo.src} />
                </div>

            ); 
        } else {
            return null;
        }
    }
}

export default PhotoModal
