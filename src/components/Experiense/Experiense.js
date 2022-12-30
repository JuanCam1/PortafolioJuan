import React, { useRef } from 'react';
import '../../App.css';
import expe from '../../assets/Persona-programando.png';


const Experiense = () => {

  const refil1 = useRef();
  const refil2 = useRef();
  const refil3 = useRef();
  const refil4 = useRef();
  const refil5 = useRef();
  
  const handleOnClick = (e) => {
    const h2 = e.target;

    if (h2.parentNode.className === 'open') {
      h2.parentNode.classList.remove('open');
    } else {
      refil1.current.classList.remove('open');
      refil2.current.classList.remove('open');
      refil3.current.classList.remove('open');
      refil4.current.classList.remove('open');
      refil5.current.classList.remove('open');
      h2.parentNode.classList.add('open');
    }
  };
  return (
    <div className='portExperiense'>
      <h2 id='portExperinses'>Experiencia</h2>

      <div>
        <div className='portAboutImg'>
          <img src={expe} alt='' />
        </div>
        <div className='exprButtons'>
          <ul>
            <li className='open' ref={refil1}>
              <h2 onClick={handleOnClick}>Instituto Colombiano del Petroleo</h2>
              <p>
                Practicas, desarrollo de aplicativo web de control de activos e
                inventarios.
              </p>
              <ol className='listExper'>
                <li>Fronted React.</li>
                <li>Backend .NetCore.</li>
                <li>Base de datos MySql.</li>
              </ol>
            </li>
            <li ref={refil2}>
              <h2 onClick={handleOnClick}>Clon del diseño de Instagram</h2>
              <p>Se crea diseño de Instagram utilizando React con CSS modules.</p>
            </li>
            <li ref={refil3}>
              <h2 onClick={handleOnClick}>Clon del diseño de Spotify</h2>
              <p>
              Se crea diseño de Spotify del home utilizando React.
              </p>
            </li>
            <li ref={refil4}>
              <h2 onClick={handleOnClick}>Aplicación de traductor </h2>
              <p>
                Creación de una aplicativo traductor consumiendo una api.
              </p>
            </li>
            <li ref={refil5}>
              <h2 onClick={handleOnClick}>App de tareas useContext</h2>
              <p>
                app de tareas utilizando useContext para el manejo de estados.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experiense;
