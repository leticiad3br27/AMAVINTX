"use client";

import { useState } from 'react';
import styles from './sidebar.module.css';

const SideMenu = ({ isMenuOpen, closeSideMenu }) => {
  return (
    <div className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ''}`}>
      <h1 className={styles.nameTi}>Fulano Da Silva Parreiras</h1>
      <a href="javascript:void(0)" className={styles.closeBtn} onClick={closeSideMenu}>
        &times;
      </a>
      <a href="/conta" className={styles.sideLink}>Conta</a>
      <a href="/configuracoes" className={styles.sideLink}>Configurações</a>
      <a href="/requerimentos" className={styles.sideLink}>Requerimentos</a>
    </div>
  );
};

export default SideMenu;