import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Portafolio</h1>
        <nav>
          <ul>
            <li><a href="#reseñas">Reseñas</a></li>
            <li><a href="#apps">Mis Aplicaciones</a></li>
            <li><a href="#usuarios">Usuarios</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="reseñas">
          <h2>Reseñas de Aplicaciones</h2>
          <p>Acá van tus reseñas de apps como VentureSky.</p>
        </section>
        <section id="apps">
          <h2>Mis Aplicaciones</h2>
          <p>Acá vas a mostrar las aplicaciones que desarrollaste.</p>
        </section>
        <section id="usuarios">
          <h2>Usuarios</h2>
          <p>Acá podrás gestionar los usuarios y sus perfiles.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
