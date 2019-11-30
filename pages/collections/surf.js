// pages/collections/surf.js

import Layout from '../../components/layout.js'
import PhotoList from '../../components/photoList';

const photoList = [
  {src: "/static/photography/meoSurf/meoSurf0.jpg", width: 16, height: 9 },
  {src: "/static/photography/meoSurf/meoSurf1.jpg", width: 3, height: 2 },
  {src: "/static/photography/meoSurf/meoSurf2.jpg", width: 3, height: 2 },
  {src: "/static/photography/meoSurf/meoSurf3.jpg", width: 3, height: 2 },
  {src: "/static/photography/meoSurf/meoSurf4.jpg", width: 3, height: 2 },
  {src: "/static/photography/meoSurf/meoSurf5.jpg", width: 3, height: 2 },
]

export default function Surf() {
  return (
    <Layout>
          <PhotoList 
            title="Liga Meo Surf 2019"
            description="Portuguese national surf competition that took place in Matosinhos."
            photos={photoList}
          />
    </Layout>
  )
}