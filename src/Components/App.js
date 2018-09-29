import React from 'react';
//import logo from './logo.svg';
import './App.sass';
import Header from './Header'
import ClockFace from '../Containers/ClockFace'
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
        <ClockFace />
        <Footer />
      </div>
    );
};

export default App;
