import {React} from 'react';

function Humanidade({ humanidade, onhumanidadeChange }) {
    return (
      <div>
          <h2>Humanidade</h2>
          <div>
              <input type="number" value={humanidade.currentHumanidade} onChange={(e) => onhumanidadeChange('currentHumanidade', e.target.value)} />
              <input type="number" value={humanidade.totalHumanidade} onChange={(e) => onhumanidadeChange('totalHumanidade', e.target.value)} />
          </div>  
            
      </div>
    );
}

export default Humanidade;