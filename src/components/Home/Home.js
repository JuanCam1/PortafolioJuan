import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='portHome' id='portHome'>
      <span>Hola, mi nombre es</span>
      <h2>Juan Camilo.</h2>
      <span className='portTrab'>Desarrollador Fronted.</span>
      
      <div className='icons'>
        <a href='https://github.com/JuanCam1?tab=overview&from=2022-10-01&to=2022-10-11' target='_blank' rel="noreferrer">
          <i className='fa-brands fa-github'></i>
        </a>
        <a href='https://www.linkedin.com/in/juan-camilo-rojas-d%C3%ADaz-a42384231' target='_blank' rel="noreferrer">
          <i className='fa-brands fa-linkedin'></i>
        </a>
        
      </div>
    </div>
  );
};

export default Home;
