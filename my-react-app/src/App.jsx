import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from './Card.jsx'
import Button from "./Button/Button.jsx"

import brook from "./assets/brook.png";
import luffy from "./assets/luffy.jpeg";
import zoro from "./assets/zoro.jpg";


function App() {
  return(
    <>
    <Header/>
    <Card pic={brook} title="Yohohoho!" text="I am practicing React"/>
    <Card pic={luffy} title="Luffy!" text="Watashi wa kaizoku no ō ni naru"/>
    <Card/><Card/><Card/>
      
    
    <Footer/>

    </>
  );
  
}

export default App
