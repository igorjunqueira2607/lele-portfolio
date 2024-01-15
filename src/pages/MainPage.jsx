import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

function MainPage() {
  return(
    <body class="flex flex-col h-screen relative">
      <Menu />
      <Footer />
    </body>
  )
}

export default MainPage;