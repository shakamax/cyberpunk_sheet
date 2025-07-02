import React from 'react';

export type HealthType = {
    currentHealth: number;
    totalHealth: number;
}
function Health({ health, onHealthChange }: { health: HealthType, onHealthChange: (health: HealthType, key: string, value: string) => void }) {
    return (
      <div>
          <h2>Vida</h2>
          <div>
              <input type="number" value={health.currentHealth} onChange={(e) => onHealthChange(health, 'currentHealth', e.target.value)} />
              <input type="number" value={health.totalHealth} onChange={(e) => onHealthChange(health, 'totalHealth', e.target.value)} />
          </div>  
            
      </div>
    );
}

export default Health;