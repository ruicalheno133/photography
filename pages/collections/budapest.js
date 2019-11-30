// pages/about.js

import Layout from '../../components/layout.js'
import PhotoList from '../../components/photoList.js';


const photoList = [
    {src: "/static/photography/budapest/buda_over_pest-1.jpg", width: 3, height: 4},
    {src: "/static/photography/budapest/waiting-1.jpg", width: 4, height: 3},
    {src: "/static/photography/budapest/bastion-1.jpg", width: 4, height: 3},
    {src: "/static/photography/budapest/picnic-1.jpg", width: 4, height: 3},
    {src: "/static/photography/budapest/citadela-1.jpg", width: 3, height: 4}
]

export default function Budapest() {
  return (
    <Layout>

    <PhotoList 
            title="Budapest"
            description=""
            photos={photoList}
        />

    </Layout>
  )
}