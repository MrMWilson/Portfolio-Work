import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Masterpiece from '../components/masterpiece';

import './home.css';

class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <Navbar />
                <h3 className="red-text">This is the homepage</h3>
                <div className="display-area">
                    <div className='row'>
                        <Masterpiece />
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;