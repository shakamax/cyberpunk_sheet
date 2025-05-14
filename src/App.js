import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Atributos from './sections/Atributos';
import Habilidades from './sections/Habilidades';
import Identidade from './sections/Identidade';
import Caracteristicas from './sections/Caracteristicas';
import Meritos from './sections/Meritos';
import Health from './sections/Health';
import WillPower from './sections/WillPower';
import Humanidade from './sections/Humanidade';
import Flaws  from  './sections/Flaws';
import Weapons from './sections/Weapons';
import Equipments from './sections/Equipments';



function App() {
  const [idendificacao, setIdentidade] = useState({});
  const [atributos, setAtributos] = useState({ forca: 0, destreza: 0, /* outros atributos */ });
  const [habilidades, setHabilidades] = useState({ atletismo: 0, briga: 0, /* outras habilidades */ });
  const [caracteristicas, setCaracteristicas] = useState ({});
  const [meritos, setMeritos] = useState({}) ;
  const [health, setHealth] = useState({}) ;
  const [willPower, setWillPower] = useState({}) ;
  const [humanidade, setHumanidade] = useState({}) ;
  const [flaws, setFlaws] = useState({}) ;
  const [weapons, setWeapons] = useState({}) ;
  const [equipments, setEquipment] = useState({});

  const handleAtributoChange = (atributo, valor) => {
    setAtributos({ ...atributos, [atributo]: parseInt(valor) });
  };

  const handleHabilidadeChange = (habilidade, valor) => {
    setHabilidades({ ...habilidades, [habilidade]: parseInt(valor) });
  };

  const handleIdedidadeChange = (Identidade, valor) => {
    setIdentidade({ ...Identidade})
  }
  
  const handleCaracteristicaChange = (caracteristicas, valor) => {
    setCaracteristicas({ ...caracteristicas, [caracteristicas]: parseInt(valor) });
  };

  const handleMeritosChange = (meritos, valor) => {
    setMeritos({ ...meritos, valor})
  }

  const handleHealthChange = (health, valor) => {
    setHealth({ ...health, valor})
  }

  const handleWillPowerChange = (WillPower, valor) => {
    setWillPower({ ...WillPower, valor})
  }

  const handleHumanidadeChange = (humanidade, valor) => {
    setHumanidade({ ...humanidade, valor})
  }

  const handleFlawsChange = (flaws, valor) => {
    setFlaws({ ...flaws, valor})
  }

  const handleWeaponsChange = (weapons, valor) => {
    setWeapons({ ...weapons, valor})
  }

  const handleEquipmentsChange = (equipments, valor) => {
    setEquipment({ ...equipments, valor})
  }


  return (
    <div class="container">
      <h1 class="text-center">Ficha de Personagem - Cyberpunk</h1>
      <Identidade idendificacao={Identidade} onHabilidadeChange={handleIdedidadeChange} />
      <hr/>
      <Atributos atributos={atributos} onAtributoChange={handleAtributoChange} />
      <hr/>
      <div class="row">
        <div class="row">
          <div class="col-3 sidetrack">
            <Habilidades habilidades={habilidades} onHabilidadeChange={handleHabilidadeChange} />
            <hr/>
            <Caracteristicas char={caracteristicas} onCaracteristicaChange={handleCaracteristicaChange} />
          </div>
          <div class="col-9">
            <div class="row">
              <div class="col-6">
                <Meritos merito={meritos} onMeritoChange={handleMeritosChange} />
              </div>
              <div class="col-6">
                <Health health={health} onHealthChange={handleHealthChange} />
                <hr/>
                <WillPower willPower={WillPower} onWillPowerChange={handleWillPowerChange} />
                <hr/>
                <Humanidade humanidade={humanidade} onhumanidadeChange={handleHumanidadeChange} />
              </div>
              <div class="col">
                <Flaws flaws={flaws} onFlawsChange={handleFlawsChange} />
              </div>
            </div>
            <hr/>
            <div class="row">
              <Weapons weapons={weapons} onWeaponsChange={handleWeaponsChange} />
            </div>
            <div class="row">
              <Equipments equipments={equipments} onEquipmentsChange={handleEquipmentsChange} /> 
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;