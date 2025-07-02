import React from 'react';
export type EquipmentsType = EquipmentType[];
export type EquipmentType = {
    Name: string;
    Durability: number;
    Structure: number;
    Cost: number;
}
function Equipments({ equipments, onEquipmentsChange, addEquipment,removeEquipment }: { equipments: EquipmentsType, onEquipmentsChange: (index: number, field: keyof EquipmentType, value: string | number) => void, addEquipment: () => void, removeEquipment: (index: number) => void }) {
    return (
      <div>
        <div className="row">
            <h2 className="col-10">Equipamentos</h2>
            <div className="col-2">
                <button 
                type="button" 
                className="btn btn-primary" 
                onClick={addEquipment}
                >
                + Equipment
                </button>
            </div>
        </div>
        <div className="row">
            <div className="col-5">
                <h5>Equipamento</h5>
            </div>
            <div className="col-2">
                <h5>Durabilidade</h5>
            </div>
            <div className="col-2">
                <h5>Estrutura</h5>
            </div>
            <div className="col-2">
                <h5>Custo</h5>
            </div>
        </div>
        <div>
            {equipments.map((equipment, index) => (
                <div className="row" key={index}>
                    <input className="col-5" type="text" value={equipment.Name} onChange={(e) => onEquipmentsChange(index, 'Name', e.target.value)} />
                    <input className="col-2" type="number" value={equipment.Durability} onChange={(e) => onEquipmentsChange(index, 'Durability', parseInt(e.target.value))} />
                    <input className="col-2" type="number" value={equipment.Structure} onChange={(e) => onEquipmentsChange(index, 'Structure', parseInt(e.target.value))} />
                    <input className="col-2" type="number" value={equipment.Cost} onChange={(e) => onEquipmentsChange(index, 'Cost', parseInt(e.target.value))} />
                    <button 
                    type="button" 
                    className="col btn btn-danger btn-sm" 
                    onClick={() => removeEquipment(index)}
                    >
                    X
                    </button>
                </div>
            ))}
        </div>
      </div>
    );
}

export default Equipments;