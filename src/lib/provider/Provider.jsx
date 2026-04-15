import DataContextProvider from '@/context/DataContextProvider';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const Provider = ({children}) => {
  return (
    <DataContextProvider>
      {children}
      <ToastContainer />
    </DataContextProvider>
  );
};

export default Provider;
