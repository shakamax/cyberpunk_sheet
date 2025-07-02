import React from 'react';

export type WeaponType = {
    weaponName: string;
    weaponValue: number;
    weaponRange: number;
    weaponSize: number;
}
export type WeaponsType = WeaponType[]; 

function Weapons({ weapons, onWeaponsChange,addWeapon,removeWeapon }: { weapons: WeaponsType, onWeaponsChange: (index: number, field: keyof WeaponType, value: string | number) => void, addWeapon: () => void, removeWeapon: (index: number) => void }) {
    return (
      <div>
        <div className="row">
            <h2 className="col-10">Armas</h2>
            <div className="col-2">
                <button 
                type="button" 
                className="btn btn-primary" 
                onClick={addWeapon}
                >
                + Weapon
                </button>
            </div>
        </div>
        <div className="row">
            <div className="col-5">
                <h5>Arma/Ataque</h5>
            </div>
            <div className="col-2">
                <h5>Modificador</h5>
            </div>
            <div className="col-2">
                <h5>Alcance</h5>
            </div>
            <div className="col-2">
                <h5>Tamanho</h5>
            </div>
        </div>
        {weapons.map((weapon, index) => (
            <div className="row" key={index}>
                <input className="col-5" type="text" value={weapon.weaponName} onChange={(e) => onWeaponsChange(index, "weaponName", e.target.value)} />
                <input className="col-2" type="number" value={weapon.weaponValue} onChange={(e) => onWeaponsChange(index, "weaponValue", e.target.value)} />
                <input className="col-2" type="number" value={weapon.weaponRange} onChange={(e) => onWeaponsChange(index, "weaponRange", e.target.value)} />
                <input className="col-2" type="number" value={weapon.weaponSize} onChange={(e) => onWeaponsChange(index, "weaponSize", e.target.value)} />
                <button 
                    type="button" 
                    className="col btn btn-danger btn-sm" 
                    onClick={() => removeWeapon(index)}
                    >
                    X
                </button>
            </div>
        ))}
      </div>
    );
}

export default Weapons;