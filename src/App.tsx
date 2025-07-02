import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Atributos, { AtributoType } from './sections/Atributos';
import Habilidades, { HabilidadesType } from './sections/Habilidades';
import Identidade, { IdentidadeType } from './sections/Identidade';
import Caracteristicas, { CharacteristicType } from './sections/Caracteristicas';
import Meritos, { MeritosType, MeritoType,} from './sections/Meritos';
import Health, { HealthType } from './sections/Health';
import WillPower, { WillPowerType } from './sections/WillPower';
import Humanidade, { HumanidadeType } from './sections/Humanidade';
import Flaws, { FlawsType, FlawType }  from  './sections/Flaws';
import Weapons, { WeaponsType, WeaponType } from './sections/Weapons';
import Equipments, { EquipmentsType, EquipmentType } from './sections/Equipments';



function App() {
  

  
  
  

  //#region Atributos
  const [atributos, setAtributos] = useState({ inteligencia: 0, raciocinio: 0, perseveranca: 0, forca: 0, destreza: 0, vigor: 0, presenca: 0, manipulacao: 0, autocontrole: 0 } as AtributoType);
  const handleAtributoChange = (atributo: string, valor: string) => {
    setAtributos({ ...atributos, [atributo]: parseInt(valor) });
  };
  //#endregion Atributos
  
  //#region Habilidades
  const [habilidades, setHabilidades] = useState({academico:0, hack:0, mecanica:0, investigacao:0, medicina:0, oculto:0, politica:0, ciencia:0, atletismo: 0, briga: 0, direcao:0, armaFogo:0, infiltracao:0, furtividade:0, sobrevivencia:0, armaBranca:0, animais:0,empatia:0,expressao:0,intimidacao:0,persusasao:0,socializacao:0,manha:0,subterfugio:0} as HabilidadesType);
  const handleHabilidadeChange = (habilidade: string, valor: string) => {
    setHabilidades({ ...habilidades, [habilidade]: parseInt(valor) });
  };
  //#endregion Habilidades
  
  //#region Identidade
  const [identificacao, setIdentidade] = useState({} as IdentidadeType);
  const handleIdedidadeChange = (Identidade:IdentidadeType) => {
    setIdentidade({ ...Identidade})
  }
  //#endregion Identidade

  //#region Caracteristicas
  const [caracteristicas, setCaracteristicas] = useState ({} as CharacteristicType);
  const handleCaracteristicaChange = (caracteristica: number, valor: string) => {
    setCaracteristicas({ ...caracteristicas, [caracteristica]: parseInt(valor) });
  };
  //#endregion Caracteristicas

  //#region Meritos
  const [meritos, setMeritos] = useState([{meritName: 'Vantagem', meritValue: 1}] as MeritosType) ;
  const handleMeritosChange = (index: number, field: keyof MeritoType, value: string | number) => {
    setMeritos(prev => 
      prev.map((merito, i) => 
        i === index ? { ...merito, [field]: value } : merito
      )
    );
  }
  const addMerito = () => {
    setMeritos(prev => [...prev, {meritName: 'Merit', meritValue: 0}]);
  };

  const removeMerito = (index: number) => {
    if (window.confirm('Remove this merit?')) {
      setMeritos(prev => prev.filter((_, i) => i !== index));
    }
  };
  //#endregion Meritos

  //#region Health  
  const [health, setHealth] = useState({} as HealthType) ;
  const handleHealthChange = (health: HealthType, key: string, valor: string) => {
    setHealth({ ...health, [key]: valor})
  }
  //#endregion Health

  //#region WillPower
  const [willPower, setWillPower] = useState({} as WillPowerType) ;
  const handleWillPowerChange = (WillPower: WillPowerType, key: string, valor: number) => {
    setWillPower({ ...WillPower, [key]: valor})
  }
  //#endregion WillPower

  //#region Humanidade
  const [humanidade, setHumanidade] = useState({} as HumanidadeType) ;
  const handleHumanidadeChange = (humanidade: HumanidadeType, key: string, valor: number) => {
    setHumanidade({ ...humanidade, [key]: valor})
  }
  //#endregion Humanidade

  //#region Flaws
  const [flaws, setFlaws] = useState([{flawName: 'DEFEITO', flawValue: 1}] as FlawsType) ;
  const handleFlawsChange = (index: number, field: keyof FlawType, value: string | number) => {
    setFlaws(prev => 
      prev.map((flaw, i) => 
        i === index ? { ...flaw, [field]: value } : flaw
      )
    );
  }
  
  
  const addFlaw = () => {
    setFlaws(prev => [...prev, {flawName: 'Flaw', flawValue: 0}]);
  };
  
  const removeFlaw = (index: number) => {
    if (window.confirm('Remove this flaw?')) {
      setFlaws(prev => prev.filter((_, i) => i !== index));
    }
  };
  //#endregion Flaws

  //#region Weapons
  const [weapons, setWeapons] = useState([{weaponName: 'Mantis Blades', weaponRange: 1, weaponSize:2, weaponValue: 4}] as WeaponsType) ;
  const handleWeaponsChange = (index: number, field: keyof WeaponType, value: string | number) => {
    setWeapons(prev => 
      prev.map((weapon, i) => 
        i === index ? { ...weapon, [field]: value } : weapon
      )
    );
  };

  const addWeapon = () => {
    setWeapons(prev => [...prev, {weaponName: 'Weapon', weaponValue: 0, weaponRange: 0, weaponSize: 0}]);
  };

  const removeWeapon = (index: number) => {
    if (window.confirm('Remove this weapon?')) {
      setWeapons(prev => prev.filter((_, i) => i !== index));
    }
  };
  //#endregion Weapons

  //#region Equipments
  const [equipments, setEquipments] = useState([{Name: 'Sandevistan', Durability: 1, Structure: 1, Cost: 9000}] as EquipmentsType) ;
  const handleEquipmentsChange = (index: number, field: keyof EquipmentType, value: string | number) => {
    setEquipments(prev => 
      prev.map((equipment, i) => 
        i === index ? { ...equipment, [field]: value } : equipment
      )
    );
  };

  const addEquipment = () => {
    const newEquipment: EquipmentType = {
      Name: "GEAR",
      Durability: 0,
      Structure: 0,
      Cost: 0
    };
    setEquipments(prev => [...prev, newEquipment]);
  };

  const removeEquipment = (index: number) => {
    if (window.confirm('Remove this equipment?')) {
      setEquipments(prev => prev.filter((_, i) => i !== index));
    }
  };
  //#endregion Equipments

  return (
    <div>

      <div className="input-container">

        <div className="container">
          <h1 className="text-center">Ficha de Personagem - Cyberpunk Kiryu Remix </h1>
          <Identidade identificacao={identificacao} onIdentificacaoChange={handleIdedidadeChange} />
          <hr/>
          <Atributos atributos={atributos} onAtributoChange={handleAtributoChange} />
          <hr/>
          <div className="row">
            <div className="row">
              <div className="col-3 sidetrack">
                <Habilidades habilidades={habilidades} onHabilidadeChange={handleHabilidadeChange} />
                <hr/>
                <Caracteristicas char={caracteristicas} onCaracteristicaChange={handleCaracteristicaChange} />
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col-6">
                    <Meritos meritos={meritos} onMeritoChange={handleMeritosChange} addMerito={addMerito} removeMerito={removeMerito} />
                    <Flaws flaws={flaws} onFlawsChange={handleFlawsChange} addFlaw={addFlaw} removeFlaw={removeFlaw} />
                  </div>
                  <div className="col-6">
                    <Health health={health} onHealthChange={handleHealthChange} />
                    <hr/>
                    <WillPower willPower={willPower} onWillPowerChange={handleWillPowerChange} />
                    <hr/>
                    <Humanidade humanidade={humanidade} onhumanidadeChange={handleHumanidadeChange} />
                  </div>
                  <div className="col">
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <Weapons weapons={weapons} onWeaponsChange={handleWeaponsChange} addWeapon={addWeapon} removeWeapon={removeWeapon} />
                </div>
                <div className="row">
                  <Equipments equipments={equipments} onEquipmentsChange={handleEquipmentsChange} addEquipment={addEquipment} removeEquipment={removeEquipment} /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>
    
  );
}

export default App;