import React from 'react'
import Breadcrumb from '../component/Breadcrumb'
import { Helmet } from 'react-helmet'
const About = () => {
  return (
    <div><Helmet>
    <meta charSet="utf-8" />
    <title>About Us</title>
  </Helmet>
      <Breadcrumb title="About Us"/>
      <h2>About us page</h2>
    </div>
  )
}

export default About
