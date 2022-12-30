import './App.css';
import About from './components/About/About';
import Experiense from './components/Experiense/Experiense';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <main className='portContainer' >
      <Header />

      <section className='portBody'>
        <div>
          <Home />
          <About />
          <Experiense />
          <Projects />
        </div>
      </section>
    </main>
  );
}

export default App;

