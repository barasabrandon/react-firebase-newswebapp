import React from 'react';
import { Outlet } from 'react-router-dom';
import Header2 from './universalComponents/header/Header2';

export default function Layout2() {
  return (
    <>
      <Header2 />
      <Outlet />
    </>
  );
}
