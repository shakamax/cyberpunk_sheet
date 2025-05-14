import {React} from 'react';

function WillPower({ willPower, onWillPowerChange }) {
    return (
      <div>
          <h2>Força de Vontade</h2>
          <div>
              <input type="number" value={willPower.currentWillPower} onChange={(e) => onWillPowerChange('currentWillPower', e.target.value)} />
              <input type="number" value={willPower.totalWillPower} onChange={(e) => onWillPowerChange('totalWillPower', e.target.value)} />
          </div>  
            
      </div>
    );
}

export default WillPower;