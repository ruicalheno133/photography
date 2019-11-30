// pages/index.js
import Layout from '../components/layout.js'
import PhotoGallery from '../components/gallery.js';

const galleryStyle = {
  margin: '0 auto',
  marginTop: 50,
  width: '70%'
}

const photos = [
  {
    src: "/static/photography/hats.jpg",
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
    src: "/static/photography/midnight_basket-1.jpg",
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
    src: "/static/photography/higher-1.jpg",
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
        <Layout>
            <PhotoGallery photos={photos} 
                          columns={3} margin={5}
                          galleryStyle={galleryStyle} />
        </Layout>
  )
}