import React from 'react';
export type FlawType = {
    flawName: string;
    flawValue: number;
}
export type FlawsType = FlawType[];

function Flaws({ flaws, onFlawsChange,addFlaw,removeFlaw }: { flaws: FlawsType, onFlawsChange:(index: number, field: keyof FlawType, value: string | number) => void, addFlaw: () => void, removeFlaw: (index: number) => void }) {
    return (
      <div>
        <div className="row">
          <h2 className="col-9">Defeitos</h2>
          <div className="col">
            <button 
            type="button" 
            className="btn btn-primary" 
            onClick={addFlaw}
            >
            + Flaw
            </button>
          </div>
          {flaws.map((flaw, index) => (
            <div className="row" key={index}>
              <input className="col-6" type="text" value={flaw.flawName} onChange={(e) => onFlawsChange(index, "flawName", e.target.value)} />
              <input className="col-5" type="number" value={flaw.flawValue} onChange={(e) => onFlawsChange(index, "flawValue", e.target.value)} />
              <button 
                type="button" 
                className="col-1 btn btn-danger btn-sm" 
                onClick={() => removeFlaw(index)}
                >
                X
              </button>
            </div>  
          ))}
        </div>
      </div>
    );
}

export default Flaws;