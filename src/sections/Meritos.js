import {React} from 'react';

function Meritos({ merito, onMeritoChange }) {
    return (
      <div>
          <h2>Meritos</h2>
          <div>
              <input type="text" value={merito.merit1} onChange={(e) => onMeritoChange('merit1', e.target.value)} />
              <input type="number" value={merito.merit1Value} onChange={(e) => onMeritoChange('merit1Value', e.target.value)} />
          </div>  
          <div>
              <input type="text" value={merito.merit2} onChange={(e) => onMeritoChange('merit2', e.target.value)} />
              <input type="number" value={merito.merit2Value} onChange={(e) => onMeritoChange('merit2Value', e.target.value)} />
          </div>  
          <div>
              <input type="text" value={merito.merit3} onChange={(e) => onMeritoChange('merit3', e.target.value)} />
              <input type="number" value={merito.merit3Value} onChange={(e) => onMeritoChange('merit3Value', e.target.value)} />
          </div>  
          <div>
              <input type="text" value={merito.merit4} onChange={(e) => onMeritoChange('merit4', e.target.value)} />
              <input type="number" value={merito.merit4Value} onChange={(e) => onMeritoChange('merit4Value', e.target.value)} />
          </div>  
          <div>
              <input type="text" value={merito.merit5} onChange={(e) => onMeritoChange('merit5', e.target.value)} />
              <input type="number" value={merito.merit5Value} onChange={(e) => onMeritoChange('merit5Value', e.target.value)} />
          </div>  
          <div>
              <input type="text" value={merito.merit6} onChange={(e) => onMeritoChange('merit6', e.target.value)} />
              <input type="number" value={merito.merit6Value} onChange={(e) => onMeritoChange('merit6Value', e.target.value)} />
          </div>  
          <div>
              <input type="text" value={merito.merit7} onChange={(e) => onMeritoChange('merit7', e.target.value)} />
              <input type="number" value={merito.merit7Value} onChange={(e) => onMeritoChange('merit7Value', e.target.value)} />
          </div>  
          <div>
              <input type="text" value={merito.merit8} onChange={(e) => onMeritoChange('merit8', e.target.value)} />
              <input type="number" value={merito.merit8Value} onChange={(e) => onMeritoChange('merit8Value', e.target.value)} />
          </div>  
          <div>
              <input type="text" value={merito.merit9} onChange={(e) => onMeritoChange('merit9', e.target.value)} />
              <input type="number" value={merito.merit9Value} onChange={(e) => onMeritoChange('merit9Value', e.target.value)} />
          </div>  
          <div>
              <input type="text" value={merito.merit10} onChange={(e) => onMeritoChange('merit10', e.target.value)} />
              <input type="number" value={merito.merit10Value} onChange={(e) => onMeritoChange('merit10Value', e.target.value)} />
          </div>  
          <div>
              <input type="text" value={merito.merit11} onChange={(e) => onMeritoChange('merit11', e.target.value)} />
              <input type="number" value={merito.merit11Value} onChange={(e) => onMeritoChange('merit11Value', e.target.value)} />
          </div>  
          <div>
              <input type="text" value={merito.merit12} onChange={(e) => onMeritoChange('merit12', e.target.value)} />
              <input type="number" value={merito.merit12Value} onChange={(e) => onMeritoChange('merit12Value', e.target.value)} />
          </div>  
          <div>
              <input type="text" value={merito.merit13} onChange={(e) => onMeritoChange('merit13', e.target.value)} />
              <input type="number" value={merito.merit13Value} onChange={(e) => onMeritoChange('merit13Value', e.target.value)} />
          </div>  
          <div>
              <input type="text" value={merito.merit14} onChange={(e) => onMeritoChange('merit14', e.target.value)} />
              <input type="number" value={merito.merit14Value} onChange={(e) => onMeritoChange('merit14Value', e.target.value)} />
          </div>
          <div>
              <input type="text" value={merito.merit15} onChange={(e) => onMeritoChange('merit15', e.target.value)} />
              <input type="number" value={merito.merit15Value} onChange={(e) => onMeritoChange('merit15Value', e.target.value)} />
          </div>  
          <div>
              <input type="text" value={merito.merit16} onChange={(e) => onMeritoChange('merit16', e.target.value)} />
              <input type="number" value={merito.merit16Value} onChange={(e) => onMeritoChange('merit16Value', e.target.value)} />
          </div>  
          <div>
              <input type="text" value={merito.merit17} onChange={(e) => onMeritoChange('merit17', e.target.value)} />
              <input type="number" value={merito.merit17Value} onChange={(e) => onMeritoChange('merit17Value', e.target.value)} />
          </div>  
  
      </div>
    );
}

export default Meritos;