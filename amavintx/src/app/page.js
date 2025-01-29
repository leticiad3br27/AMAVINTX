
"use client";
import { useState } from 'react';
import Header from '../components/header/Header';
import SideMenu from '../components/sidebar/sidebar';
import styles from './page.module.css';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeSideMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <SideMenu isMenuOpen={isMenuOpen} closeSideMenu={closeSideMenu} />
      <main className={styles.mainContent}>
        <h2>Confirmações Recentes</h2>
        <p>Aqui estão as confirmações mais recentes do sistema.</p>
      </main>
    </div>
  );
}