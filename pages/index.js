// pages/index.js
import Layout from '../components/layout.js'
import PhotoGallery from '../components/gallery.js';
import Home from '../components/home.js';
import { Container, Row, Col } from 'react-bootstrap'

const galleryStyle = {
  margin: '0 auto',
  marginTop: 50,
  width: '80%',
}


const photos = [
  {
    src: "/static/photography/london/bike-1.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/static/photography/lightAndShadow/passing_by-1.jpg",
    width: 3,
    height: 4
  },
  {
    src: "/static/photography/tate-1.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/static/photography/midnight-basket-1.jpg",
    width: 3,
    height: 4
  },
  {
    src: "/static/photography/lightAndShadow/rcv-1.jpg",
    width: 3,
    height: 4
  },
  {
    src: "/static/photography/underwater-1.jpg",
    width: 3,
    height: 4
  },
  {
    src: "/static/photography/london/higher-1.jpg",
    width: 3,
    height: 4
  },
  {
    src: "/static/photography/gliding-1.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/static/photography/shard-1.jpg",
    width: 3,
    height: 4
  },


];

export default function Index() {
  return (
        <Layout renderFooter={true}>
          
            <PhotoGallery photos={photos} 
                          columns={3} margin={5}
                          galleryStyle={galleryStyle} />
          
          {/*<Home photos={photos} />*/}

        </Layout>
  )
}