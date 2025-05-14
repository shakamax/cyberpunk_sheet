import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Atributos({ atributos, onAtributoChange }) {
  return (
    <div class="row">
        <div class="col-4">
            <h2>Atributos mentais</h2>
                <div>
                    <label>Inteligência: </label>
                    <input type="number" value={atributos.inteligencia} onChange={(e) => onAtributoChange('inteligencia', e.target.value)} />
                </div>  
                <div>
                    <label>Raciocionio: </label>
                    <input type="number" value={atributos.raciocinio} onChange={(e) => onAtributoChange('raciocinio', e.target.value)} />
                </div>
                <div>
                    <label>Perseverança: </label>
                    <input type="number" value={atributos.perseveranca} onChange={(e) => onAtributoChange('perseveranca', e.target.value)} />
                </div>
        </div>
        <div class="col-4">
            <h2>Atributos Físicos</h2>
            <div>
                <label>Força: </label>
                <input type="number" value={atributos.forca} onChange={(e) => onAtributoChange('forca', e.target.value)} />
            </div>
            <div>
                <label>Destreza: </label>
                <input type="number" value={atributos.destreza} onChange={(e) => onAtributoChange('destreza', e.target.value)} />
            </div>
            <div>
                <label>Vigor: </label>
                <input type="number" value={atributos.Vigor} onChange={(e) => onAtributoChange('destreza', e.target.value)} />
            </div>
        </div>
        <div class="col-4">
            <h2>Atributos Sociais</h2>
            <div>
                <label>Presença: </label>
                <input type="number" value={atributos.presença} onChange={(e) => onAtributoChange('presenca', e.target.value)} />
            </div>
            <div>
                <label>Manipulação: </label>
                <input type="number" value={atributos.manipulacao} onChange={(e) => onAtributoChange('manipulacao', e.target.value)} />
            </div>
            <div>
                <label>Autocontrole: </label>
                <input type="number" value={atributos.autocontrole} onChange={(e) => onAtributoChange('autocontrole', e.target.value)} />
            </div>
        </div>

    {/* Adicione outros atributos aqui */}
    </div>
  );
}

export default Atributos;