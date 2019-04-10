import React, { Component } from 'react';
import '../styles/App.css';
import {HashRouter as Router, Route} from 'react-router-dom'; 
import Navbar from './Navbar';
import Header from './Header';
import Home from './Home';
import About from './About';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Router>
          <div className="App">
            <Header />
            <Navbar />
            
            <main>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/testimonials" component={Testimonials} />
              <Route exact path="/contact" component={Contact} />
            </main>
            <div style={{height:'60px'}}></div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
