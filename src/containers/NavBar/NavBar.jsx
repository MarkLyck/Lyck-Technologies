import React from 'react'
import './styles/navbar.css'
import Logo from '../../../public/images/Logo.svg'

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <img src={Logo} alt="logo" className="logo"/>
      </nav>)
  }
}

export default NavBar
