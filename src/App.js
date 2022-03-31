import React from 'react';
import { AddToHomeScreen } from 'react-pwa-add-to-homescreen';
import Home from './Home';
import "./assets/css/preloader.css"
import "./assets/css/bootstrap.min.css"
import "./assets/css/meanmenu.css"
import "./assets/css/animate.min.css"
import "./assets/css/owl.carousel.min.css"
import "./assets/css/backToTop.css"
import "./assets/css/jquery.fancybox.min.css"
import "./assets/css/fontAwesome5Pro.css"
import "./assets/css/elegantFont.css"
import "./assets/css/default.css"
import "./assets/css/style.css"
function App() {
  return (
    <div >
    <AddToHomeScreen />
    <Home/>
    </div>
  );
}

export default App;
