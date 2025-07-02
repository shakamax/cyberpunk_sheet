import React from 'react';
export type WillPowerType = {currentWillPower: number, totalWillPower: number}

function WillPower({ willPower, onWillPowerChange }: { willPower: WillPowerType, onWillPowerChange: (willPower: WillPowerType, key: string, valor: number) => void }) {
    return (
      <div>
          <h2>Força de Vontade</h2>
          <div>
              <input type="number" value={willPower.currentWillPower} onChange={(e) => onWillPowerChange(willPower, 'currentWillPower', parseInt(e.target.value))} />
              <input type="number" value={willPower.totalWillPower} onChange={(e) => onWillPowerChange(willPower, 'totalWillPower', parseInt(e.target.value))} />
          </div>  
            
      </div>
    );
}

export default WillPower;