import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from "./components/NavBar";
import {BrowserRouter,Route} from "react-router-dom";
import BookDetails from './components/BookDetails';
import About from "./components/About";
import Help from './components/Help';
import Popular from './components/Popular';
import Home from './components/Home';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>

    <div>
      <Route path="/" exact component={App} />
      <Route path="/about" exact component={About} />
      <Route path="/help" exact component={Help} />
      <Route path="/popular" exact component={Popular} />
      <Route path="/book/:id" exact component={BookDetails} />
    </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


