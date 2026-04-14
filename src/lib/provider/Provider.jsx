import DataContextProvider from '@/context/DataContextProvider';
import React from 'react';

const Provider = ({childern}) => {
  return (
    <DataContextProvider>
      {childern}
    </DataContextProvider>
  );
};

export default Provider;
