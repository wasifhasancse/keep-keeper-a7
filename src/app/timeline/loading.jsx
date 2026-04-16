import React from 'react';
import { MoonLoader } from 'react-spinners';

const loading = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <MoonLoader color="#2afa4a" />
    </div>
  );
};

export default loading;
