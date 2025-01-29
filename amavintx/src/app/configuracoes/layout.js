

import React from 'react';
import Navbar from '../../components/Navbar/navbar';

const ConfigLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default ConfigLayout;