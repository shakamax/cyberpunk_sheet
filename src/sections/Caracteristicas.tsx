import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export type CharacteristicType = {
    tamanho: number;
    velocidade: number;
    defesa: number;
    blindagem: number;
    iniciativa: number;
    experienciaAtual: number;
    experienciaTotal: number;
}

function Caracteristicas({ char, onCaracteristicaChange }: { char: CharacteristicType, onCaracteristicaChange: Function }) {
  return (
    <div>
        <div>
            <label>Tamanho: </label>
            <input className="cyberinput" type="number" value={char.tamanho} onChange={(e) => onCaracteristicaChange('tamanho', e.target.value)} />
        </div>  
        <div>
            <label>Velocidade: </label>
            <input type="number" value={char.velocidade} onChange={(e) => onCaracteristicaChange('velocidade', e.target.value)} />
        </div>
        <div>
            <label>Defesa: </label>
            <input type="number" value={char.defesa} onChange={(e) => onCaracteristicaChange('defesa', e.target.value)} />
        </div>
        <div>
            <label>Blindagem: </label>
            <input type="number" value={char.blindagem} onChange={(e) => onCaracteristicaChange('blindagem', e.target.value)} />
        </div>
        <div>
            <label>Iniciativa: </label>
            <input type="number" value={char.iniciativa} onChange={(e) => onCaracteristicaChange('iniciativa', e.target.value)} />
        </div>
        <div className="row">
            <label className="col-4">Experiência: </label>
            <input className="col-4" type="number" value={char.experienciaAtual} onChange={(e) => onCaracteristicaChange('experienciaAtual', e.target.value)} />
            <input className="col-4" type="number" value={char.experienciaTotal} onChange={(e) => onCaracteristicaChange('experienciaTotal', e.target.value)} />
        </div>

    </div>
  );
}

export default Caracteristicas;