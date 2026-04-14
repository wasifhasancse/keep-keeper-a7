import DataContextProvider from '@/context/DataContextProvider';
import React from 'react';

const Provider = ({children}) => {
  return (
    <DataContextProvider>
      {children}
    </DataContextProvider>
  );
};

export default Provider;
