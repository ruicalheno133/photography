import React from "react";
import window from 'global'
import { CSSTransition } from 'react-transition-group'
import Fade from 'react-reveal/Fade'
import PhotoModal from './photoModal.js'

const sideScroller = {
  whiteSpace: 'nowrap',
  width: '100%',
  top: '-1em',
  transform: 'translateX(100%)',
  textAlign: 'left',
  margin: 0,
  padding: 0,
}

const imgH = {
  display: 'inline-block',
  height: '70vh',
  marginLeft: '5em',
  marginTop: 0,
  marginBottom: 0,
  padding: 0
}

const imgV = {
  display: 'inline-block',
  height: '70vh',
  marginLeft: '5em',
  marginTop: 0,
  marginBottom: 0,
  padding: 0
}

const backButton = {
  display: 'inline-block',
  color: 'black',
  marginLeft: '5em',
  marginRight: '5em',
  marginTop: 0,
  marginBottom: 0,
  padding: 0,
  cursor: 'pointer',
  textAlign: 'center'
}




class HorizontalPhotoList extends React.Component {

    constructor(props) {
        super(props);
        const animateList = props.photos.map((img) => {
          return 'appear'
        })
        this.state = ({animate: animateList, showModal: false, modalIndex: 0})
        this.animate = this.animate.bind(this)
        super();
    }

    animate (index) {
      var newList = []

      if (this.state.showModal == false ) {
        for (let i = 0; i < this.state.animate.length; i++) {
          newList.push('hide')

        }

        this.setState({animate: newList, modalIndex: index, showModal: true})
      } else {
        for (let i = 0; i < this.state.animate.length; i++) {
          newList.push('show')
        }
        this.setState({animate: newList, modalIndex: index, showModal: false})
      }

      
    }

    componentDidMount(){

    }

    render() {
        

        const photos = this.props.photos.map((img, index) => {
            if (img.orientation == 'V') {
              return (
                <a onClick={() => {this.animate(index)}}>
                  <img style={imgV} className={this.state.animate[index]} src={img.src} />
                </a>
              )
            } else {
              return (
                <a onClick={() => {this.animate(index)}}>
                  <img style={imgH} className={this.state.animate[index]} src={img.src} />
                </a>
              )
            }

        })

        return (
          <div>
          <CSSTransition
            in={true}
            timeout={2000}
            classNames="collection-transition"
          >
            
            <div key={0} style={sideScroller}>

              {photos}
                           
              <a style={backButton} onClick={this.props.goBack}>
                <h1 style={{fontSize: '1vw'}}> GO <br/> BACK</h1>
              </a>
            </div>   

          </CSSTransition>
          <PhotoModal 
            show={this.state.showModal} 
            photo={this.props.photos[this.state.modalIndex]} 
            click={this.animate}
            />
          </div>

        )
    }
}

export default HorizontalPhotoList
