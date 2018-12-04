import React, { Component } from 'react';
import Showcase from './components/showcase/Showcase';
import Projects from './components/projects/Projects';

class App extends Component {
  render() {
    return (
      <div>
      <Showcase />
      <Projects />
      </div>
    );
  }
}

export default App;
