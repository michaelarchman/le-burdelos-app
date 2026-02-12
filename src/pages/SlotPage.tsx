import { type Component } from "solid-js";
import SlotMachine from "../components/SlotMachine";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { balance } from "../store";

const SlotPage: Component = () => {
  return (
    <div id="App">
      <Topbar />
      <Header />
      <div class="content" style={{ padding: "2rem", "text-align": "center" }}>
        <h2>🎰 Casino Slot Machine 🎰</h2>
        <div style={{ "background": "#2c3e50", "color": "white", "padding": "10px", "border-radius": "8px", "display": "inline-block", "margin-bottom": "20px" }}>
           Saldo: <span style={{ "font-weight": "bold", "color": "#2ecc71" }}>{balance()} PLN</span>
        </div>
        <div style={{ "display": "flex", "justify-content": "center" }}>
            <SlotMachine />
        </div>
      </div>
      <Footer email="leburdelos@gmail.com" telefon="+48 963 532 756" telefon2="+48 530 535 024"/>
    </div>
  );
};

export default SlotPage;
