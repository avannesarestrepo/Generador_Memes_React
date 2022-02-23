import React, { useState } from 'react'
import html2canvas from 'html2canvas';
import 'bootstrap/dist/css/bootstrap.css'
import './css/general.css'

import Fire from './img/fire.jpg';
import Futurama from './img/futurama.jpg';
import History from './img/history.jpg';
import Matrix from './img/matrix.jpg';
import Philosoraptor from './img/philosoraptor.jpg';
import Smart from './img/smart.jpg';

function App() {
  
  const [linea1, setLinea1] = useState();
  const [linea2, setLinea2] = useState();
  const [image, setImage] = useState();

  const onChangeLinea1=(e)=>{
    setLinea1(e.target.value)
  }

  const onChangeLinea2=(e)=>{
    setLinea2(e.target.value)
  }

  const selectImage=(e)=>{
    let imageID = e.target.value;
    console.log(imageID)
    if(imageID==='fire'){
      setImage(Fire);
    }else if(imageID==='futurama'){
      setImage(Futurama);
    }else if(imageID==='history'){
      setImage(History);
    }else if(imageID==='matrix'){
      setImage(Matrix);
    }else if(imageID==='philosoraptor'){
      setImage(Philosoraptor);
    }else if(imageID==='smart'){
      setImage(Smart);
    }
  }

  const onClickExportar = () => {
    html2canvas(document.querySelector("#memeImage")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col'>
          <div className='row mt-3'>
            <div className='col'>
              <div className='mt-5'>
                <select onChange={selectImage} className='custom-select'>
                  <option value="fire">Casa en llamas</option>
                  <option value="futurama">Futurama</option>
                  <option value="history">History</option>
                  <option value="matrix">Matrix</option>
                  <option value="philosoraptor">Philosoraptor</option>
                  <option value="smart">Smart Guy</option>
                </select>
              </div>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col'>
              <input className="mb-2" onChange={onChangeLinea1} type="text" placeholder='Linea 1'/>
            </div>
          </div>
          <div className='row mt-1'>
            <div className='col'>
              <input className="mb-2" onChange={onChangeLinea2} type="text" placeholder='Linea 2'/>
            </div>
          </div>  
          <div className='row mt-2'>
            <div className='col'>
              <button onClick={onClickExportar} className='btn btn-danger'>Exportar</button>
            </div>
          </div>     
        </div>
        <div className='col' id="memeImage">
          <div className='container mt-5'>
            <span className='line1'>{linea1}</span><br/>
            <span className='line2'>{linea2}</span>
          </div>
          <img src={image}/>
        </div>
      </div>
      

      
    </div>
      
  );
}

export default App;
