import React from 'react';

import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import Footer from '../pages/Shared/Footer/Footer';
import Home from '../pages/Home/Home';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Container>
        <Outlet></Outlet>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;