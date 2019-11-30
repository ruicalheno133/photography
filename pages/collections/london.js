// pages/about.js

import Layout from '../../components/layout.js'
import PhotoList from '../../components/photoList.js';


const photoList = [
  {src: "/static/photography/london/picadilly-1.jpg", width: 4, height: 3},
    {src: "/static/photography/london/tower-1.jpg", width: 4, height: 3},
    {src: "/static/photography/london/bike-1.jpg", width: 4, height: 3},
    {src: "/static/photography/london/higher-1.jpg", width: 4, height: 3},
    {src: "/static/photography/london/sky-garden-1.jpg", width: 4, height: 3},
    {src: "/static/photography/london/shard-1.jpg", width: 3, height: 4},
    {src: "/static/photography/london/museum-1.jpg", width: 3, height: 4},
    {src: "/static/photography/london/underwater-1.jpg", width: 3, height: 4},
    {src: "/static/photography/london/windowed-1.jpg", width: 3, height: 4},
    {src: "/static/photography/london/hats.jpg", width: 4, height: 3}
]

export default function London() {
  return (
    <Layout>

    <PhotoList 
            title="London"
            description="A collection of photographs of my first trip to the busy yet peaceful city of London."
            photos={photoList}
        />

    </Layout>
  )
}