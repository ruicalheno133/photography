// pages/collections.js

import Layout from '../components/layout.js'
import CollectionsComponent from '../components/collections.js'
import { Container, Row, Col } from 'react-bootstrap'
import {Fragment} from 'react'
import Fade from 'react-reveal/Fade'


const galleryStyle = {
    margin: '0 auto',
    marginTop: 50,
    width: '100%',
    textAlign: 'center'
}

const collectionContainer = {
    height: '300px',
    overflow: 'hidden',
    textAlign: 'center',
    color: 'black'
}

const imgStyle = {
    width: '80%',
    transform: 'translate(22em, 12em)'
}

const text = {
  textAlign: 'left'
}

const rowStyle = {
  backgroundColor: '#f9f8fd',
  justifyContent: 'left',
  alignItems: 'center',
  textAlign: 'left',
  height: '100vh'
}

const titleStyle = {
  fontSize: '10em'
}


export default function Collections() {
  return (
    <Layout renderFooter={false}>
        <CollectionsComponent />
    </Layout>
  )
}