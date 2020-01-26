// pages/about.js

import Layout from '../../components/layout.js'
import PhotoList from '../../components/photoList.js';

const photoList = [
    {src: "/static/photography/streets/underwater-1.jpg", width: 1, height: 1},
    {src: "/static/photography/streets/bike-1.jpg", width: 3, height: 4},
    {src: "/static/photography/streets/hats.jpg", width: 3, height: 4},
    {src: "/static/photography/streets/picadilly-1.jpg"},
    {src: "/static/photography/streets/picnic-1.jpg", width: 1, height: 1},
    {src: "/static/photography/streets/tate-1.jpg", width: 1, height: 1},
    {src: "/static/photography/streets/together-1.jpg", width: 1, height: 1}
]

export default function Portraiture() {
  return (
    <Layout>

    <PhotoList 
            title="Street"
            description=""
            photos={photoList}
        />

    </Layout>
  )
}