import {React} from 'react';

function Flaws({ flaws, onFlawsChange }) {
    return (
      <div>
          <h2>Defeitos</h2>
          <div class="col-7">
              <input class="col-6" type="text" value={flaws.flaws1} onChange={(e) => onFlawsChange('flaws1', e.target.value)} />
              <input class="col-6" type="number" value={flaws.flaws1Value} onChange={(e) => onFlawsChange('flaws1Value', e.target.value)} />
          </div>  
          <div class="col-7">
              <input class="col-6" type="text" value={flaws.flaws2} onChange={(e) => onFlawsChange('flaws2', e.target.value)} />
              <input class="col-6" type="number" value={flaws.flaws2Value} onChange={(e) => onFlawsChange('flaws2Value', e.target.value)} />
          </div>  
          <div class="col-7">
              <input class="col-6" type="text" value={flaws.flaws3} onChange={(e) => onFlawsChange('flaws3', e.target.value)} />
              <input class="col-6" type="number" value={flaws.flaws3Value} onChange={(e) => onFlawsChange('flaws3Value', e.target.value)} />
          </div>  
          <div class="col-7">
              <input class="col-6" type="text" value={flaws.flaws4} onChange={(e) => onFlawsChange('flaws4', e.target.value)} />
              <input class="col-6" type="number" value={flaws.flaws4Value} onChange={(e) => onFlawsChange('flaws4Value', e.target.value)} />
          </div>  
          <div class="col-7">
              <input class="col-6" type="text" value={flaws.flaws5} onChange={(e) => onFlawsChange('flaws5', e.target.value)} />
              <input class="col-6" type="number" value={flaws.flaws5Value} onChange={(e) => onFlawsChange('flaws5Value', e.target.value)} />
          </div>  
        
  
      </div>
    );
}

export default Flaws;