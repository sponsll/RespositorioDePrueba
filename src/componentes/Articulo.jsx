import React, { Component } from 'react';
import PilasConvencionales from './Pilas';
import BateriasLitio from './Baterias';

class Articulo extends Component{

    render() {
        return (
        <div>
            <PilasConvencionales />
            <BateriasLitio />
        </div>
        )
    }
}

export default Articulo;