import React, { Component } from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import MenuPage from './Pages/MenuPage';
import ServicesPage from './Pages/ServicesPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';

class App extends Component {
  constructor() {
    super()
    this.state = {
      page: "home",
      collapse: false
    }
  }

  handlePage = page => {
    let collapse = this.state.collapse
    this.setState({ page, collapse: false })
  }

  collapseNavbar = () => {
    let collapse = this.state.collapse
    this.setState({ collapse: !collapse })
  }

  renderPage = () => {
    switch(this.state.page) {
      case "home":
        return <Home howMany={this.state.howMany} handlePage={this.handlePage} />
      case "menu":
        return <MenuPage handlePage={this.handlePage} />
      case "services":
        return <ServicesPage handlePage={this.handlePage} />
      case "about":
        return <AboutPage handlePage={this.handlePage} />
      case "contact":
        return <ContactPage handlePage={this.handlePage} />
      default:
        return <Home handlePage={this.handlePage} />
    }
  }

  render() {
    const { page, collapse } = this.state
    return (
      <div className="App">
        <Navbar collapse={collapse} collapseNavbar={this.collapseNavbar} page={page} handlePage={this.handlePage} />
        <div className="second-navbar">
          <Navbar page={page} handlePage={this.handlePage} />
        </div>
        {this.renderPage()}
        <Footer /> 
      </div>
    );
  }
}

export default App;
