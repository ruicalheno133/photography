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
  width: '90%'
}


  const imgContainer = {
      marginBottom:'20vh'
  }
  
  const imgStyle = {
    width: '100%',
  }

  const infoStyle = {
    margin: '0 auto',
    marginTop: 70,
  }

  const buttons= {
    margin: '0 auto',
    width: '100%',
    textAlign: 'right'
  }
  
  const titleStyle = {
    color: 'black',
    marginBottom: '1em'
  }

  const buttonStyle = {
    backgroundColor: 'transparent',
    border: '0px solid black',
    marginTop: '5vh'
  }

  const buttonImgStyle = {
    width: '3vh',
    height:'3vh'
  }

  const dontScroll = {
      top: 10,
      height: '60vh'
  }

  const scroll = {
    overflowY: 'scroll',
    height: '65vh'
  }


class PhotoList extends React.Component {

    constructor() {
        super();
        this.state = {
          index: 0
        }
        this._handleNextPress = this._handleNextPress.bind(this)
        this._handlePrevPress = this._handlePrevPress.bind(this)
    }

    _handleNextPress(){
      if (this.state.index != this.props.photos.length - 1 )
      this.setState({
        index: this.state.index + 1
      })
    }

    _handlePrevPress(){
      if (this.state.index != 0) {
        this.setState({
          index: this.state.index - 1
        })
      }
    }

    componentDidMount(){

    }

    render() {
        return (
            <Container>
            <Row>
              <Col sm={4} style={dontScroll}>
                  <div style={infoStyle}>
                    <h1 style={titleStyle}>{this.props.title}</h1>
                    <p style={titleStyle}>{this.props.description}</p>
                    </div>
              </Col>
                <Col sm={8} style={dontScroll}>
                <ImageCaroussel galleryStyle={galleryStyle} photos={this.props.photos} />
                  {/*<PhotoGallery photos={this.props.photos} 
                                columns={1} margin={30} 
                  galleryStyle={galleryStyle}/>*/}
                </Col>
                </Row>
                {/* 
                <div style={buttons}>
                <button style={buttonStyle} onClick={this._handlePrevPress}>
                <img style={buttonImgStyle} src={"/static/arrow_left.png"}/>
                  </button>
                  <button style={buttonStyle} onClick={this._handleNextPress}>
                  <img style={buttonImgStyle} src={"/static/arrow_right.png"}/>
                  </button>
                </div>
                */}
            </Container>
        )
    }
}

export default PhotoList
