import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <div className="container">
      <h1>Bem-vindo!</h1>
      <p>Este é um exemplo de página utilizando o Bootstrap em um projeto Next.js.</p>
      <button className="btn btn-primary">Clique aqui</button>
    </div>
  );
}

export default HomePage;