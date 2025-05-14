import React from 'react';

function Habilidades({ habilidades, onHabilidadeChange }) {
  return (
    <div>
      <h2 class="text-center topHeader">Habilidades</h2>
      <div>
        <h2>Mental</h2>
        <div>
          <label>Academico: </label>
          <input type="number" value={habilidades.academico} onChange={(e) => onHabilidadeChange('academico', e.target.value)} />
        </div>
        <div>
          <label>Hack: </label>
          <input type="number" value={habilidades.hack} onChange={(e) => onHabilidadeChange('hack', e.target.value)} />
        </div>
        <div>
          <label>Mecanica: </label>
          <input type="number" value={habilidades.mecanica} onChange={(e) => onHabilidadeChange('mecanica', e.target.value)} />
        </div>
        <div>
          <label>Investigação: </label>
          <input type="number" value={habilidades.investigação} onChange={(e) => onHabilidadeChange('investigação', e.target.value)} />
        </div>
        <div>
          <label>Medicina: </label>
          <input type="number" value={habilidades.medicina} onChange={(e) => onHabilidadeChange('medicina', e.target.value)} />
        </div>
        <div>
          <label>Oculto: </label>
          <input type="number" value={habilidades.oculto} onChange={(e) => onHabilidadeChange('oculto', e.target.value)} />
        </div>
        <div>
          <label>Politica: </label>
          <input type="number" value={habilidades.politica} onChange={(e) => onHabilidadeChange('politica', e.target.value)} />
        </div>
        <div>
          <label>Ciência: </label>
          <input type="number" value={habilidades.ciencia} onChange={(e) => onHabilidadeChange('ciencia', e.target.value)} />
        </div>
      </div>
      <div>
        <h2>Fisico</h2>
        <div>
          <label>Atletismo: </label>
          <input type="number" value={habilidades.atletismo} onChange={(e) => onHabilidadeChange('atletismo', e.target.value)} />
        </div>
        <div>
          <label>Briga: </label>
          <input type="number" value={habilidades.briga} onChange={(e) => onHabilidadeChange('briga', e.target.value)} />
        </div>
        <div>
          <label>Direção: </label>
          <input type="number" value={habilidades.direcao} onChange={(e) => onHabilidadeChange('direcao', e.target.value)} />
        </div>
        <div>
          <label>Arma de fogo: </label>
          <input type="number" value={habilidades.armaFogo} onChange={(e) => onHabilidadeChange('armaFogo', e.target.value)} />
        </div>
        <div>
          <label>Infiltração: </label>
          <input type="number" value={habilidades.infiltracao} onChange={(e) => onHabilidadeChange('infiltracao', e.target.value)} />
        </div>
        <div>
          <label>Furtividade: </label>
          <input type="number" value={habilidades.furtividade} onChange={(e) => onHabilidadeChange('furtividade', e.target.value)} />
        </div>
        <div>
          <label>Sobrêvivencia: </label>
          <input type="number" value={habilidades.sobrevivencia} onChange={(e) => onHabilidadeChange('sobrevivencia', e.target.value)} />
        </div>
        <div>
          <label>Armas brancas: </label>
          <input type="number" value={habilidades.armaBranca} onChange={(e) => onHabilidadeChange('armaBranca', e.target.value)} />
        </div>
      </div>
      <div>
        <h2>Social</h2>
        <div>
          <label>Trato com animais: </label>
          <input type="number" value={habilidades.animais} onChange={(e) => onHabilidadeChange('animais', e.target.value)} />
        </div>
        <div>
          <label>Empatia: </label>
          <input type="number" value={habilidades.empatia} onChange={(e) => onHabilidadeChange('empatia', e.target.value)} />
        </div>
        <div>
          <label>Expressão: </label>
          <input type="number" value={habilidades.expressao} onChange={(e) => onHabilidadeChange('expressao', e.target.value)} />
        </div>
        <div>
          <label>Intimidação: </label>
          <input type="number" value={habilidades.intimidacao} onChange={(e) => onHabilidadeChange('intimidacao', e.target.value)} />
        </div>
        <div>
          <label>Persuasão: </label>
          <input type="number" value={habilidades.persusasao} onChange={(e) => onHabilidadeChange('persusasao', e.target.value)} />
        </div>
        <div>
          <label>Socialização: </label>
          <input type="number" value={habilidades.socializacao} onChange={(e) => onHabilidadeChange('socializacao', e.target.value)} />
        </div>
        <div>
          <label>Manha: </label>
          <input type="number" value={habilidades.manha} onChange={(e) => onHabilidadeChange('manha', e.target.value)} />
        </div>
        <div>
          <label>Subterfugio: </label>
          <input type="number" value={habilidades.subterfugio} onChange={(e) => onHabilidadeChange('subterfugio', e.target.value)} />
        </div>
      </div>

      {/* Adicione outras habilidades aqui */}
    </div>
  );
}

export default Habilidades;