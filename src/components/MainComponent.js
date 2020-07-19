import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import Home from './HomeComponent';
import Footer from './FooterComponent';

//import Header from './HeaderComponent';
//import Section from './SectionComponent';
//import Gallery from './GalleryComponent';

class Main extends Component {
    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        };

        return (
            <div>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;