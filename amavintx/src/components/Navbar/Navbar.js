
"use client";
import React, { useState } from 'react';
import './Navbar.module.css';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleSubMenu = (index) => {
        setOpenSubMenu(openSubMenu === index ? null : index);
    };

    return (
        <nav id="sidebar" style={{ display: isSidebarOpen ? 'block' : 'none' }}>
            <ul>
                <li>
                    <span className="logo">configurações</span>
                    <button onClick={toggleSidebar} id="toggle-btn">
                        {/* SVG Icon */}
                    </button>
                </li>
                <li className="active">
                    <a href="Config.html">
                        {/* SVG Icon */}
                        <span>Geral</span>
                    </a>
                </li>
                <li>
                    <button onClick={() => toggleSubMenu(1)} className="dropdown-btn">
                        {/* SVG Icon */}
                        <span>Documentos</span>
                        {/* SVG Icon */}
                    </button>
                    {openSubMenu === 1 && (
                        <ul className="sub-menu">
                            <li><a href="doc.html">Pessoais</a></li>
                        </ul>
                    )}
                </li>
                <li>
                    <button onClick={() => toggleSubMenu(2)} className="dropdown-btn">
                        {/* SVG Icon */}
                        <span>Dependentes</span>
                        {/* SVG Icon */}
                    </button>
                    {openSubMenu === 2 && (
                        <ul className="sub-menu">
                            <li><a href="dependente1.html">Felipe</a></li>
                            <li><a href="dependente2.html">Monica</a></li>
                            <li><a href="dependente3.html">Enzo</a></li>
                        </ul>
                    )}
                </li>
                <li>
                    <a href="calendar.html">
                        {/* SVG Icon */}
                        <span>Agendamentos</span>
                    </a>
                </li>
                <li>
                    <a href="profile.html">
                        {/* SVG Icon */}
                        <span>Usuario</span>
                    </a>
                </li>
                <li className="Voltar">
                    <a href="index.html">
                        {/* SVG Icon */}
                        <span>Retornar ao Menu</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;