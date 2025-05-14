import {React} from 'react';

function Health({ health, onHealthChange }) {
    return (
      <div>
          <h2>Vida</h2>
          <div>
              <input type="number" value={health.currentHealth} onChange={(e) => onHealthChange('currentHealth', e.target.value)} />
              <input type="number" value={health.totalHealth} onChange={(e) => onHealthChange('totalHealth', e.target.value)} />
          </div>  
            
      </div>
    );
}

export default Health;