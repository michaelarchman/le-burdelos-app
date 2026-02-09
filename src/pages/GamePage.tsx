import Topbar from "../components/Topbar"
import GamePanel from "../components/GameSlot"
import Content from "../components/Content"
import Footer from "../components/Footer"

const GamePage = () => {

    return (
        <div id="App">
            <Topbar />
            <Content
                title="Gry"
                description="Wybierz gre dla siebie"
                content={
                    <>
                        <div class="gamePanel_list">
                            <GamePanel name="Russian Roulete" slotsCount={2} />
                            <GamePanel name="Casino" slotsCount={4} />
                            <GamePanel name="Le burdelos" slotsCount={7} />
                            <GamePanel name="Le Aerox" slotsCount={6} />
                            <GamePanel name="Wild dogs" slotsCount={8} />
                        </div>
                        <Footer email="leburdelos@gmail.com" telefon="+48 963 532 756" />
                    </>
                }
            />
        </div>
    )
}

export default GamePage