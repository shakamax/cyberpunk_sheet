import {React} from 'react';

function Equipments({ equipments, onEquipmentsChange }) {
    return (
      <div>
        <h2>Equipamentos</h2>
        <div class="row">
            <div class="col-4">
                <h5>Equipamento</h5>
            </div>
            <div class="col-2">
                <h5>Durabilidade</h5>
            </div>
            <div class="col-2">
                <h5>Estrutura</h5>
            </div>
            <div class="col-2">
                <h5>Custo</h5>
            </div>
        </div>
        <div class="row">
            <input class="col-4" type="text" value={equipments.equipments1} onChange={(e) => onEquipmentsChange('equipments1', e.target.value)} />
            <input class="col-2" type="number" value={equipments.equipments1Value} onChange={(e) => onEquipmentsChange('equipments1Value', e.target.value)} />
            <input class="col-2" type="number" value={equipments.equipments2Value} onChange={(e) => onEquipmentsChange('equipments2Value', e.target.value)} />
            <input class="col-2" type="number" value={equipments.equipments3Value} onChange={(e) => onEquipmentsChange('equipments3Value', e.target.value)} />
        </div>
        <div class="row">
            <input class="col-4" type="text" value={equipments.equipments1} onChange={(e) => onEquipmentsChange('equipments1', e.target.value)} />
            <input class="col-2" type="number" value={equipments.equipments1Value} onChange={(e) => onEquipmentsChange('equipments1Value', e.target.value)} />
            <input class="col-2" type="number" value={equipments.equipments2Value} onChange={(e) => onEquipmentsChange('equipments2Value', e.target.value)} />
            <input class="col-2" type="number" value={equipments.equipments3Value} onChange={(e) => onEquipmentsChange('equipments3Value', e.target.value)} />
        </div>
        <div class="row">
            <input class="col-4" type="text" value={equipments.equipments1} onChange={(e) => onEquipmentsChange('equipments1', e.target.value)} />
            <input class="col-2" type="number" value={equipments.equipments1Value} onChange={(e) => onEquipmentsChange('equipments1Value', e.target.value)} />
            <input class="col-2" type="number" value={equipments.equipments2Value} onChange={(e) => onEquipmentsChange('equipments2Value', e.target.value)} />
            <input class="col-2" type="number" value={equipments.equipments3Value} onChange={(e) => onEquipmentsChange('equipments3Value', e.target.value)} />
        </div>
        <div class="row">
            <input class="col-4" type="text" value={equipments.equipments1} onChange={(e) => onEquipmentsChange('equipments1', e.target.value)} />
            <input class="col-2" type="number" value={equipments.equipments1Value} onChange={(e) => onEquipmentsChange('equipments1Value', e.target.value)} />
            <input class="col-2" type="number" value={equipments.equipments2Value} onChange={(e) => onEquipmentsChange('equipments2Value', e.target.value)} />
            <input class="col-2" type="number" value={equipments.equipments3Value} onChange={(e) => onEquipmentsChange('equipments3Value', e.target.value)} />
        </div>
  
      </div>
    );
}

export default Equipments;