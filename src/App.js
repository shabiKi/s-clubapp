import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Home from './components/Home/Home';
import Club from './components/Club/Club';
import Fixture from './components/Fixture/Fixture';
import Players from './components/Players/Players';
import Gallery from './components/Gallery/Gallery';
import ContactUs from './components/ContactUs/ContactUs';
import Member from './components/Member/Member';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Footer from './components/Footer/Footer';


class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => { 
    this.setState((prevState) => { 
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) { 
      backDrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
          <main className="main-content">
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/club' component={Club} />
                <Route path='/fixture' component={Fixture} />
                <Route path='/players' component={Players} />
                <Route path='/gallery' component={Gallery} />
                <Route path='/contact' component={ContactUs} />
                <Route path='/member' component={Member} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
            </Switch>
        </main>
        <footer> <Footer /> </footer>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
