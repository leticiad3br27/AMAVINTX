"use client"

import styles from './config.module.css';

const Configuracoes = () => {
  return (
    <div className={styles.container}>
      {/* Menu Lateral Personalizado */}
      <div className={styles.sidebar}>
        <h2>Configurações</h2>
        <ul>
          <li><a href="/configuracoes/perfil">Perfil</a></li>
          <li><a href="/configuracoes/seguranca">Segurança</a></li>
          <li><a href="/configuracoes/notificacoes">Notificações</a></li>
          <li><a href="/configuracoes/privacidade">Privacidade</a></li>
        </ul>
      </div>

      {/* Conteúdo Principal */}
      <main className={styles.mainContent}>
        <h1>Configurações Gerais</h1>
        <p>Bem-vindo à página de configurações. Aqui você pode gerenciar suas preferências.</p>
      </main>
    </div>
  );
};

export default Configuracoes;