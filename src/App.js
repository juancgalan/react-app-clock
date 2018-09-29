import React from 'react';
//import logo from './logo.svg';
import './App.sass';
import Header from './Header.js'
import Clock from './Clock.js'
import Footer from './Footer'

/**
 * Changed programming style to functional.
 * https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc
 */

/**
 * Main component. Builds entire application
 */
const App = () => {
    return (
      <div className="App">
        <Header />
        <Clock />
        <Footer />
      </div>
    );
};

export default App;
