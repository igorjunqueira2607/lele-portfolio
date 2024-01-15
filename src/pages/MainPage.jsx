import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import MainImage from '../components/MainImage';

function MainPage() {
  return(
    <body class="flex flex-col h-screen w-screen relative">
      <Menu />
      <MainImage />
      <Footer />
    </body>
  )
}

export default MainPage;