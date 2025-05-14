import {React} from 'react';

function Weapons({ weapons, onWeaponsChange }) {
    return (
      <div>
        <h2>Armas</h2>
        <div class="row">
            <div class="col-4">
                <h5>Arma/Ataque</h5>
            </div>
            <div class="col-2">
                <h5>Modificador</h5>
            </div>
            <div class="col-2">
                <h5>Alcance</h5>
            </div>
            <div class="col-2">
                <h5>Tamanho</h5>
            </div>
        </div>
        <div class="row">
            <input class="col-4" type="text" value={weapons.weapons1} onChange={(e) => onWeaponsChange('weapons1', e.target.value)} />
            <input class="col-2" type="number" value={weapons.weapons1Value} onChange={(e) => onWeaponsChange('weapons1Value', e.target.value)} />
            <input class="col-2" type="number" value={weapons.weapons2Value} onChange={(e) => onWeaponsChange('weapons2Value', e.target.value)} />
            <input class="col-2" type="number" value={weapons.weapons3Value} onChange={(e) => onWeaponsChange('weapons3Value', e.target.value)} />
        </div>
        <div class="row">
            <input class="col-4" type="text" value={weapons.weapons1} onChange={(e) => onWeaponsChange('weapons1', e.target.value)} />
            <input class="col-2" type="number" value={weapons.weapons1Value} onChange={(e) => onWeaponsChange('weapons1Value', e.target.value)} />
            <input class="col-2" type="number" value={weapons.weapons2Value} onChange={(e) => onWeaponsChange('weapons2Value', e.target.value)} />
            <input class="col-2" type="number" value={weapons.weapons3Value} onChange={(e) => onWeaponsChange('weapons3Value', e.target.value)} />
        </div>
        <div class="row">
            <input class="col-4" type="text" value={weapons.weapons1} onChange={(e) => onWeaponsChange('weapons1', e.target.value)} />
            <input class="col-2" type="number" value={weapons.weapons1Value} onChange={(e) => onWeaponsChange('weapons1Value', e.target.value)} />
            <input class="col-2" type="number" value={weapons.weapons2Value} onChange={(e) => onWeaponsChange('weapons2Value', e.target.value)} />
            <input class="col-2" type="number" value={weapons.weapons3Value} onChange={(e) => onWeaponsChange('weapons3Value', e.target.value)} />
        </div>
        <div class="row">
            <input class="col-4" type="text" value={weapons.weapons1} onChange={(e) => onWeaponsChange('weapons1', e.target.value)} />
            <input class="col-2" type="number" value={weapons.weapons1Value} onChange={(e) => onWeaponsChange('weapons1Value', e.target.value)} />
            <input class="col-2" type="number" value={weapons.weapons2Value} onChange={(e) => onWeaponsChange('weapons2Value', e.target.value)} />
            <input class="col-2" type="number" value={weapons.weapons3Value} onChange={(e) => onWeaponsChange('weapons3Value', e.target.value)} />
        </div>
  
      </div>
    );
}

export default Weapons;