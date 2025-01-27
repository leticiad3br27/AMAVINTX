import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <div className="container">
      <h1>Bem-vindo!</h1>
      <p>Este é um exemplo de página utilizando o Bootstrap em um projeto Next.js.</p>
      <Link href="/configurações">
        <button className="btn btn-primary">Ir para Configuração</button>
      </Link>
    </div>
  );
}

export default HomePage;