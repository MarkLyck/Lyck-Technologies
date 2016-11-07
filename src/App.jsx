import React from 'react';
import NavBar from './containers/NavBar/NavBar'
import Hero from './containers/Hero/Hero'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Hero/>
      </div>
    );
  }
}

export default App;
