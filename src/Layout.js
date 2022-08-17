import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './universalComponents/header/Header';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
