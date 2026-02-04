import type { Component } from "solid-js"
import Content from "./components/Content"
import GamePanel from "./components/GameSlot"
import Header from "./components/Header"
import Topbar from "./components/Topbar"
import Footer from "./components/Footer"

const App: Component  = () => {
  return (
    <div id="App">
      <Topbar />
      <Header />
      <Content 
        title="Casino" 
        description="Make your first million!!!!!" 
        content={
          <>
            <h4>Select your next game:</h4>
            <p>sssss</p> 
            <div class="gamePanel_list">
              <GamePanel name="Russian Roulete" slotsCount={2} />
              <GamePanel name="Casino" slotsCount={4} />
              <GamePanel name="Le burdelos" slotsCount={7} />
            </div>
            <Footer email="leburdelos@gmail.com" telefon="+48 963 532 756" telefon2="+48 530 535 024"/>
          </>
        } 
      />
    </div>
  )
}

export default App
