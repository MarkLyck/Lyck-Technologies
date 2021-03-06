import React from 'react'
import './styles/hero.css'
import backgroundImage from '../../../public/images/Background.jpg'

class Hero extends React.Component {
  render() {
    return (
      <div className="hero" style={ {backgroundImage: `url("${backgroundImage}")`} }>
        <div className="hero-main-content">
          <h1>Hello, we're here to make Webapps for the <span className="primary-color">future.</span></h1>
          <div className="special-underline"/>
        </div>
        <a href="mailto:hello@markdid.it" className="action-btn">Contact Us</a>
        <h3>When a static website just doesn't cut it!</h3>
      </div>
    )
  }
}

export default Hero
