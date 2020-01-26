// pages/about.js

import Layout from '../../components/layout.js'
import PhotoList from '../../components/photoList.js';


const photoList = [
    {src: "/static/photography/portraiture/bit_1.jpg", width: 3, height: 4},
    {src: "/static/photography/portraiture/tippler_1.jpg", width: 3, height: 4},
    {src: "/static/photography/portraiture/eu_1.jpg", width: 1, height: 1}
]

export default function Portraiture() {
  return (
    <Layout>

    <PhotoList 
            title="Portraiture"
            description=""
            photos={photoList}
        />

    </Layout>
  )
}