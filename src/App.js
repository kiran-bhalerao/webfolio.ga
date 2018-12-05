import React, { Component } from 'react';
import Showcase from './components/showcase/Showcase';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
      <Showcase />
      <Projects />
      <Skills />
      <Footer />
      </div>
    );
  }
}

export default App;
