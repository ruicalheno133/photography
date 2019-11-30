// pages/about.js

import Layout from '../../components/layout.js'
import PhotoList from '../../components/photoList.js';

const photoList = [
    {src: "/static/photography/intoFilm/into_film_1_13.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_1_15.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_3_13.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_3_23.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_3_35.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_4_17.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_5_6.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_5_14.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_5_25.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_5_27.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_6_5.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_6_11.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_8_16.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_8_20.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_9_5.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_9_14.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_9_23.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_10_2.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_10_8.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_10_29.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_10_34.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_11_1.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_11_2.jpg", width:3, height: 2},
    {src: "/static/photography/intoFilm/into_film_11_3.jpg", width:3, height: 2}
]

export default function IntoFilm() {
  return (
    <Layout>
        
        <PhotoList 
            title="Into Film"
            description="A collection of photos representative of my iniciation and growth into the analog world."
            photos={photoList}
        />
    </Layout>
  )
}