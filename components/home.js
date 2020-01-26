import React from "react";
import Layout from './layout.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PhotoGallery from '../components/gallery.js';
import ImageCaroussel from '../components/caroussel.js'

const galleryStyle = {
    margin: '0 auto',
    marginTop: 50,
    width: '90%',
    height: '55vh',
    alignItems: 'center',
  }
  
  const square = {
    width: '40vh',
    height: '40vh',
    margin:'0 auto',
    alignItems: 'center',
    textAlign: 'center'
  }
  
  const center = {
    margin: '0 auto'
  }
  
  const img = {
    height: '100%'
  }
  


class Home extends React.Component {

    constructor() {
        super();
        this.state = {
          index: 0,
          index2: 1,
          index3: 2,
        }
        this._changePhotos = this._changePhotos.bind(this)
        this._changePhotos2 = this._changePhotos2.bind(this)
        this._changePhotos3 = this._changePhotos3.bind(this)
    }

    _changePhotos() {
        this.setState({
            index: Math.floor(Math.random() * this.props.photos.length),
            index2: this.state.index2 ,
            index3: this.state.index3
        }, function () {
            this.timeout = setTimeout(
              this._changePhotos,
              Math.floor(Math.random() * 3000) + 3000
            )})
    }

    _changePhotos2() {
        this.setState({
            index: this.state.index,
            index2: Math.floor(Math.random() * this.props.photos.length),
            index3: this.state.index3
        }, function () {
            this.timeout2 = setTimeout(
              this._changePhotos2,
              Math.floor(Math.random() * 5000) + 3000
            )})
    }

    _changePhotos3() {
        this.setState({
            index: this.state.index, 
            index2: this.state.index2,
            index3: Math.floor(Math.random() * this.props.photos.length)
        }, function () {
            this.timeout3 = setTimeout(
              this._changePhotos3,
              Math.floor(Math.random() * 3000) + 4000
            )})
    }

    componentDidMount(){
        this.timeout = setTimeout(
            this._changePhotos,
            Math.floor(Math.random() * 3000) + 3000
          )
        this.timeout2 = setTimeout(
            this._changePhotos2,
            Math.floor(Math.random() * 5000) + 3000
          )
        this.timeout3 = setTimeout(
            this._changePhotos3,
            Math.floor(Math.random() * 3000) + 4000
          )
    }

    componentWillUnmount() {
        if (this.timeout) clearTimeout(this.timeout)
        if (this.timeout2) clearTimeout(this.timeout2)
        if (this.timeout3) clearTimeout(this.timeout3)
    }

    render() {
        const photo1_src = this.props.photos[this.state.index].src
        const photo2_src = this.props.photos[this.state.index2].src
        const photo3_src = this.props.photos[this.state.index3].src

        return (
            <Row style={galleryStyle}>
            <Col xs={4}>
            <div style={square}>
              <img style={img} src={photo1_src} />
            </div>
            </Col>
            <Col xs={4}>
            <div style={square}>
              <img style={img} src={photo2_src} />
            </div>
            </Col>
            <Col xs={4}>
            <div style={square}>
              <img style={img} src={photo3_src} />
            </div>
            
            </Col>
          </Row>
        )
    }
}

export default Home
