// pages/about.js

import Layout from '../../components/layout.js'
import PhotoList from '../../components/photoList.js';

const photoList = [
    {src: "/static/photography/lightAndShadow/rcv-1.jpg"},
    {src: "/static/photography/lightAndShadow/cv-1.jpg"},
    {src: "/static/photography/lightAndShadow/passing_by-1.jpg"},
    {src: "/static/photography/lightAndShadow/light_fall-1.jpg"},
    {src: "/static/photography/lightAndShadow/stairs-1.jpg"},
    {src: "/static/photography/lightAndShadow/shadow-1.jpg"}
]

export default function LightAndShadowm() {
  return (
    <Layout>
        
        <PhotoList 
            title="A play of light and shadow"
            description="An experiment on the duality of light and shadow regarding the way they work together to create colors, shapes and feelings."
            photos={photoList}
        />
    </Layout>
  )
}