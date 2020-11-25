import React, { Component } from 'react';

import './masterpiece.css';

class Masterpiece extends Component {
    state = {}
    render() {
        return (

            <div className='col-lg-3 background'>
                <h1 className='masterpiece-h1'>
                    Masterpiece goes here.
                    </h1>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Creaci%C3%B3n_de_Ad%C3%A1n_%28Miguel_%C3%81ngel%29.jpg/370px-Creaci%C3%B3n_de_Ad%C3%A1n_%28Miguel_%C3%81ngel%29.jpg' className='masterpiece-img' />
                <p className='masterpiece-p'>
                    Description goes here.
                    </p>
                <div>
                    <button className='btn btn-warning'>Press for more info.</button>
                </div>
            </div>
        );
    }
}

export default Masterpiece;