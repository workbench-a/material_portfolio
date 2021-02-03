import React, { Fragment } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/Theme';

import './App.css';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Header from './components/ui/partials/Header';
import Footer from './components/ui/partials/Footer';
import SimpleCarousel from './components/ui/partials/SimpleCarousel';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Papers from './components/ui/papers/Papers';
import Research from './components/Research';
import MarketAnalysis from './components/MarketAnalysis';
// import Notebook from './components/ui/notebooks/Notebook';

function App() {
  const reload = () => window.location.reload();
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <BrowserRouter>
          <Header position="fixed" color="primary"/>
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          {/* <Route exact path='/timeline' component={Timeline}/> */}
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/market-analysis' component={MarketAnalysis}/>
          {/* <Route exact path='/papers' component={Papers}/> */}
          {/* <Route exact path='/research' component={Research}/> */}
          {/* <Route exact path='/notebook' component={Notebook}/> */}
          </Switch>
          <Footer/>
        </BrowserRouter>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
