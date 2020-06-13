import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import SubFooter from './components/subfooter/SubFooter';
import Form from './components/form/form';
import team from './img/team-viewer.png';
import demo from './img/demodesk.png';
import urban from './img/urban-sport.png';
import loyalty from './img/Loyalty.png';
class App extends React.Component {
  render(){
    return (
      <div className="App">
          <Header />
          <div className="body">
              <Form />
          </div>
          <SubFooter/>
          <Footer />
      </div>
    );
  }
}

export default App;
