import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import 'popper.js'
import 'jquery'
import ReactDOM from 'react-dom'; 
import reportWebVitals from './reportWebVitals';
import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Layout2 from './components/layout';
import Admin from './components/a_panel/admin';
import Projects from './components/projects1/Projects';
import Portfolio from './components/portfolio/Portfolio';



document.title = 'ant0nchikov.pro'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Route exact path={["/"]} component={Layout2}/>
    <Route exact path={["/sign_in"]} component={Layout2}/>
    <Route exact path={["/admin"]} component={Admin}/>
    <Route exact path={["/projects"]} component={Layout2}/>
    <Route exact path={["/portfolio"]} component={Layout2}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
