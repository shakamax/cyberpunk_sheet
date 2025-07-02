import React from 'react';
export type MeritosType = MeritoType[];

export type MeritoType = { 
    meritName: string;
    meritValue: number;
}

function Meritos({ meritos, onMeritoChange,addMerito,removeMerito }: { meritos: MeritosType, onMeritoChange: (index: number, field: keyof MeritoType, value: string | number) => void, addMerito: () => void, removeMerito: (index: number) => void }) {
    return (
      <div>
          <div className="row">
            <h2 className="col-9">Meritos</h2>
            <div className="col">
                <button 
                type="button" 
                className="btn btn-primary" 
                onClick={addMerito}
                >
                + Merit
                </button>
            </div>
          </div>
          <div className="row">
           {meritos.map((merito, index) => (
            <div className="row" key={index}>
              <input className="col-6" type="text" value={merito.meritName} onChange={(e) => onMeritoChange(index, "meritName", e.target.value)} />
              <input className="col-5" type="number" value={merito.meritValue} onChange={(e) => onMeritoChange(index, "meritValue", e.target.value)} />
              <button 
              type="button" 
              className="col btn btn-danger btn-sm" 
              onClick={() => removeMerito(index)}
              >
              X
              </button>
            </div>
           ))} 
         </div>
      </div>
    );
}

export default Meritos;