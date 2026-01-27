import "./App.css"
import type { Component } from "solid-js"
import Content from "./components/Content"
import GamePanel from "./components/GameSlot"
import Header from "./components/Header"
import Topbar from "./components/Topbar"

const App: Component = () => {
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

            <div class="gamePanel_list">
              <GamePanel name="Russian Roulete" slotsCount={2} />
              <GamePanel name="Casino" slotsCount={4} />
              <GamePanel name="Le burdelos" slotsCount={7} />
            </div>

          
            <div class="contact-box">
              <div class="contact-left">
                <h2>Le Burdelos</h2>
              </div>

              <div class="contact-right">
                <p>📞 Telefon: +48 123 456 789</p>
                <p>📧 Email: kontakt@leburdelos.pl</p>
              </div>
            </div>
          </>
        } 
      />


    </div>
  )
}

export default App
