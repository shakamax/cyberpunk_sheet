import React from 'react';

export type HumanidadeType = {currentHumanidade: number, totalHumanidade: number}

function Humanidade({ humanidade, onhumanidadeChange }: { humanidade: HumanidadeType, onhumanidadeChange: (humanidade: HumanidadeType, key: string, valor: number) => void }) {
    return (
      <div>
          <h2>Humanidade</h2>
          <div>
              <input type="number" value={humanidade.currentHumanidade} onChange={(e) => onhumanidadeChange(humanidade, 'currentHumanidade', parseInt(e.target.value))} />
              <input type="number" value={humanidade.totalHumanidade} onChange={(e) => onhumanidadeChange(humanidade, 'totalHumanidade', parseInt(e.target.value))} />
          </div>  
            
      </div>
    );
}

export default Humanidade;