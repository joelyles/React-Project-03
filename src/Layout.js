import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const Layout = ({ search, setSearch }) => {
  return (
    <div className="App">
        <Header title="React Blog"/>
        <Nav search={search} setSearch={setSearch}/>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout
