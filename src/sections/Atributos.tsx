import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export type AtributoType = {
    inteligencia: number;
    raciocinio: number;
    perseveranca: number;
    forca: number;
    destreza: number;
    vigor: number;
    presenca: number;
    manipulacao: number;
    autocontrole: number;
}

function Atributos({ atributos, onAtributoChange }: { atributos: AtributoType, onAtributoChange: Function }) {
  return (
    <div className="row">
        <div className="col-4">
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
        <div className="col-4">
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
                <input type="number" value={atributos.vigor} onChange={(e) => onAtributoChange('vigor', e.target.value)} />
            </div>
        </div>
        <div className="col-4">
            <h2>Atributos Sociais</h2>
            <div>
                <label>Presença: </label>
                <input type="number" value={atributos.presenca} onChange={(e) => onAtributoChange('presenca', e.target.value)} />
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