import React from 'react';
import '../../App.css';
import foto from '../../assets/indice.jpg';

const About = () => {
  return (
    <div className='portAbout'>
      <h2 id='portAbout'>Sobre Mi</h2>
      <div>
        <div className='portAboutDesc'>
          <p>
            Hola! Mi nombre es Juan Camilo Rojas Diaz; disfruto creando cosas
            para la internet que perduren en el tiempo. Mi interes en el
            desarrollo web comenzo desde hace años y desde ese momento no se ha
            detenido el aprendizaje y la pasión en lo que hago!.
          </p>

          <p>
            He avanzado demasiado hasta el día de hoy, sea realizando proyectos
            ó con la practica universitaria que realice para fortalecer mis
            actitudes y habilidades en el campo del desarrollo web.
          </p>

          <p>
            Soy una persona curiosa, creativa, perseverante con ganas de
            demostrar mis capacidades utilizando tecnologías como son HTML, CSS,
            JAVASCRIPT Y REACT.
          </p>
        </div>
        <div className='portAboutImg'>
          <img src={foto} alt='foto' />
        </div>
      </div>
    </div>
  );
};

export default About;
