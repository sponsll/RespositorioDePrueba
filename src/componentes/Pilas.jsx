import React from 'react';
import Autonomia from './Autonomia';
import Carga from './Carga';

function PilasConvencionales() {
    return (
        <div>
            <h3>Pilas convencionales</h3>
            <p>
                A pesar del auge de las energias renovables, 
                las pilas convencionales siguen utilizandose a diario.
            </p>
            <br />
            <Autonomia km='Con este tipo de batería no se puede' />
            <Carga carga='Sí'/>
        </div>
    );
    
}

export default PilasConvencionales;