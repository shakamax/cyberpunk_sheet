import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export type IdentidadeType = {
    nome: string;
    player: string;
    cronica: string;
    vicio: string;
    virtude: string;
    conceito: string;
    idade: string;
    faccao: string;
    grupo: string;
}

function Identidade({identificacao, onIdentificacaoChange }: {identificacao: IdentidadeType, onIdentificacaoChange: (identificacao: IdentidadeType, key: string, valor: string) => void }) {
  return (
    <div className="row">
        <div className="col-4">
            <div className="input-row">
                <label>Nome: </label>
                <input className="cyberinput" type="Text" />
                {/* <input class="cyberinput" type="Text" value={idendificacao.nome} onChange={(e) => onIdentificacaoChange('nome', e.target.value)} /> */}
            </div>  
            <div>
                <div className="input-row">
                    <label>Player: </label>
                    <input className="cyberinput" type="Text" value={identificacao.player} onChange={(e) => onIdentificacaoChange(identificacao, 'player', e.target.value)} />
                </div>
            </div>
            <div>
                <div className="input-row">
                    <label>Cronica: </label>
                    <input className="cyberinput" type="Text" value={identificacao.cronica} onChange={(e) => onIdentificacaoChange(identificacao, 'cronica', e.target.value)} />
                </div>
            </div>
        </div>
        <div className="col-4">
            <div>
                <div className="input-row">
                    <label>Vicio: </label>
                    <input className="cyberinput" type="Text" value={identificacao.vicio} onChange={(e) => onIdentificacaoChange(identificacao, 'vicio', e.target.value)} />
                    
                </div>
            </div>
            <div>
                <div className="input-row">
                <label>Virtude: </label>
                <input className="cyberinput" type="Text" value={identificacao.virtude} onChange={(e) => onIdentificacaoChange(identificacao, 'virtude', e.target.value)} />

                </div>
            </div>
            <div>
                <div className="input-row">
                    <label>Conceito: </label>
                    <input className="cyberinput" type="Text" value={identificacao.conceito} onChange={(e) => onIdentificacaoChange(identificacao, 'conceito', e.target.value)} />

                </div>
            </div>
        </div>
        <div className="col-4">
            <div>
                <div className="input-row">
                    <label>Idade: </label>
                    <input className="cyberinput" type="Text" value={identificacao.idade} onChange={(e) => onIdentificacaoChange(identificacao, 'idade', e.target.value)} />

                </div>
            </div>
            <div>
                <div className="input-row">
                    <label>Facção: </label>
                    <input className="cyberinput" type="Text" value={identificacao.faccao} onChange={(e) => onIdentificacaoChange(identificacao, 'faccao', e.target.value)} />
                </div>
            </div>

            <div>
                <div className="input-row">
                    <label>Grupo: </label>
                    <input className="cyberinput" type="Text" value={identificacao.grupo} onChange={(e) => onIdentificacaoChange(identificacao, 'grupo', e.target.value)} />

                </div>
            </div>
        </div>

    {/* Adicione outros atributos aqui */}
    </div>
  );
}

export default Identidade;