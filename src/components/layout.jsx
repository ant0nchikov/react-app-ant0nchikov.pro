import React from 'react'
import Header1 from './header_1/header1';
import Layout1 from './layout_1/Layout1';
import Footer1 from './footer_1/footer1';
import Portfolio from './portfolio/Portfolio';
import Projects from './projects1/Projects';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Sign_in from './sign_ni/Sign_in';
import Admin from './a_panel/admin';





function Layout2() {
    return (
      <BrowserRouter>
    <Route exact path={["/admin"]} component={Admin}/>
      <div id="main_c" class="col-lg-8 mx-auto p-3 py-md-5">
        
    <Route exact path={["/"]} component={Header1}/>
    <Route exact path={["/"]} component={Layout1}/>
    <Route exact path={["/"]} component={Footer1}/>

    <Route exact path={["/portfolio"]} component={Header1}/>
    <Route exact path={["/portfolio"]} component={Portfolio}/>
    <Route exact path={["/portfolio"]} component={Footer1}/>

    <Route exact path={["/projects"]} component={Header1}/>
    <Route exact path={["/projects"]} component={Projects}/>
    <Route exact path={["/projects"]} component={Footer1}/>
      
    <Route exact path={["/sign_in"]} component={Sign_in}/>
        </div>
        </BrowserRouter>
    )
}

export default Layout2
