import React, { Component } from 'react';
import Showcase from './components/showcase/Showcase';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

class App extends Component {
  render() {
    return (
      <div>
      <Showcase />
      <Projects />
      <Skills />
      </div>
    );
  }
}

export default App;
