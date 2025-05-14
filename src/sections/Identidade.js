import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Atributos({ idendificacao, onIdentificacaoChange }) {
  return (
    <div class="row">
        <div class="col-4">
            <div class="input-row">
                <label>Nome: </label>
                <input class="cyberinput" type="Text" />
                {/* <input class="cyberinput" type="Text" value={idendificacao.nome} onChange={(e) => onIdentificacaoChange('nome', e.target.value)} /> */}
            </div>  
            <div>
                <div class="input-row">
                    <label>Player: </label>
                    <input class="cyberinput" type="Text" value={idendificacao.player} onChange={(e) => onIdentificacaoChange('player', e.target.value)} />
                </div>
            </div>
            <div>
                <div class="input-row">
                    <label>Cronica: </label>
                    <input class="cyberinput" type="Text" value={idendificacao.cronica} onChange={(e) => onIdentificacaoChange('cronica', e.target.value)} />
                </div>
            </div>
        </div>
        <div class="col-4">
            <div>
                <div class="input-row">
                    <label>Vicio: </label>
                    <input class="cyberinput" type="Text" value={idendificacao.vicio} onChange={(e) => onIdentificacaoChange('vicio', e.target.value)} />
                    
                </div>
            </div>
            <div>
                <div class="input-row">
                <label>Virtude: </label>
                <input class="cyberinput" type="Text" value={idendificacao.virtude} onChange={(e) => onIdentificacaoChange('virtude', e.target.value)} />

                </div>
            </div>
            <div>
                <div class="input-row">
                    <label>Conceito: </label>
                    <input class="cyberinput" type="Text" value={idendificacao.conceito} onChange={(e) => onIdentificacaoChange('conceito', e.target.value)} />

                </div>
            </div>
        </div>
        <div class="col-4">
            <div>
                <div class="input-row">
                    <label>Idade: </label>
                    <input class="cyberinput" type="Text" value={idendificacao.idade} onChange={(e) => onIdentificacaoChange('idade', e.target.value)} />

                </div>
            </div>
            <div>
                <div class="input-row">
                    <label>Facção: </label>
                    <input class="cyberinput" type="Text" value={idendificacao.faccao} onChange={(e) => onIdentificacaoChange('faccao', e.target.value)} />

                </div>
            </div>
            <div>
                <div class="input-row">
                    <label>Grupo: </label>
                    <input class="cyberinput" type="Text" value={idendificacao.grupo} onChange={(e) => onIdentificacaoChange('grupo', e.target.value)} />

                </div>
            </div>
        </div>

    {/* Adicione outros atributos aqui */}
    </div>
  );
}

export default Atributos;