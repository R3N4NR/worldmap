import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as World } from './world.svg';
import './App.css';
import { HexColorPicker } from 'react-colorful';

function App() {
  const svgRef = useRef(null);
  const [color, setColor] = useState("#aabbcc");
  const [country, setCountry] = useState<string>('')

 
  const handleClick = (event: any) => {
    
   
    const target = event.target;

    const getName = target.getAttribute('name')
    setCountry(getName)


    if (target instanceof SVGElement && target.tagName === 'path') {

      const path = target;

      path.setAttribute('fill', color);
    }


  };

  return (
    <div className="App">
      <div className="map-container">
        <World style={{ maxWidth: '100%', maxHeight: '100vh' }} ref={svgRef} onClick={handleClick} />
        <div className="colorPicker" style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
          <HexColorPicker color={color} onChange={setColor} />
        </div>
        <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
          <span>Country : {country}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
