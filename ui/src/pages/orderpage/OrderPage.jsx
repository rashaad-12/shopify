import React from 'react';
import { NavigationBar } from '../../components/common/NavigationBar';

import { Login } from './components';

import '../../css/login.css'

export const OrderPage = () => {
  
  return (
    <>
      <NavigationBar />
      {/* Add content specific to the OrderPage */}
      <Login />
    </>
  );
};
