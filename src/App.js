import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Component/Header/Header';
import { DataContextProvider } from './Component/ContextProvider/ContextProvider';
import Home from './Component/Pages/Home';
import AboutPage from './Component/Pages/AboutPage';
import TrainingPage from './Component/Pages/TrainingPage';
import DetailsPage from './Component/Pages/DetailsPage';
import PricingPage from './Component/Pages/PricingPage';
import ContactPage from './Component/Pages/ContactPage';
import JoiningPage from './Component/Pages/JoiningPage';


function App() {

  return (
    <DataContextProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/our-training">
            <TrainingPage></TrainingPage>
          </Route>
          <Route path="/training/:id">
            <DetailsPage></DetailsPage>
          </Route>
          <Route path="/pricing">
            <PricingPage></PricingPage>
          </Route>
          <Route path="/membership">
            <JoiningPage></JoiningPage>
          </Route>
          <Route path="/about-us">
            <AboutPage></AboutPage>
          </Route>
          <Route path="/contact">
            <ContactPage></ContactPage>
          </Route>
        </Switch>
      </Router>
    </DataContextProvider>
  );
}

export default App;
