import './App.css'
import Content from './components/Content'
import GamePanel from './components/GameSlot'
import Topbar from './components/Topbar'


function App() {

  return (
    <div id='App'>
      <Topbar />

      <Content 
        title="Casino" 
        description='Make your first million!!!!!' 
        content={
        <>
          <h4>Select your next game:</h4>
          <div class='gamePanel_list'>
            <GamePanel name="Russian Roulete" slotsCount={2} />
            <GamePanel name="Casino" slotsCount={4} />
            <GamePanel name="Le burdelos" slotsCount={7} />
          </div>
        </>


      } />
    </div>
  )
}

export default App
