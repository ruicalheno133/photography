import React from "react";
import Layout from './layout.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PhotoGallery from '../components/gallery.js';
import ImageCaroussel from '../components/caroussel.js'
import ImageList from '../components/list.js'
import window from 'global'

const galleryStyle = {
  margin: '0 auto',
  marginTop: 50,
  width: '100%',
  height: '100%',
  backgroundColor: 'red '
}
  
  const titleStyle = {
    color: 'black',
    marginBottom: '1em',
    padding: 0,
    textAlign: 'center',
    marginTop: '1vh'
  }

  const link = {
    margin: 'auto',
    padding: 0,
    height:'100%',
    color: 'black',
    textDecoration: 'none',
    backgroundColor: 'transparent',
  }

  const buttonStyle = {
    backgroundColor: 'transparent',
    border: '0px solid black',
    marginTop: '5vh'
  }

  const buttonImgStyle = {
    width: '3vh',
    height:'3vh',
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
        this.mobileCheck = this.mobileCheck.bind(this)
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

    mobileCheck() {
      return (typeof window.orientation !== "undefined");
    };

    render() {

        var display = <ImageCaroussel galleryStyle={galleryStyle} photos={this.props.photos} />

        if (this.mobileCheck()) {
          var display = <ImageList galleryStyle={galleryStyle} photos={this.props.photos} />
        }

        return (
            <Container style={{height:'100%'}}>
                    <h3 style={titleStyle}> <a style={link} href="/collections"> Collections </a> → {this.props.title} </h3>
                    {//<p style={titleStyle}>{this.props.description}</p>
                    }
                    {display}
            </Container>
        )
    }
}

export default PhotoList
