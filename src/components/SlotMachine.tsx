import { createSignal, For, type Component } from "solid-js";
import { balance, setBalance } from "../store";
{/* Nie bede ukrywał z prawie całym tym pomagała mi AI */}

const SlotMachine: Component = () => {
  const symbols = ["X", "Y", "Z"];
  const [slots, setSlots] = createSignal(["X", "X", "X"]);
  const [spinning, setSpinning] = createSignal(false);
  const [message, setMessage] = createSignal("Bet: 10 PLN | Press Spin!");

  const spin = () => {
    if (spinning()) return;
    if (balance() < 10) {
      setMessage("Insufficient funds! Deposit more PLN.");
      return;
    }

    setBalance(balance() - 10);
    setSpinning(true);
    setMessage("Spinning...");

    
    let count = 0;
    const interval = setInterval(() => {
      setSlots([
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
      ]);
      count++;
      if (count > 10) {
        clearInterval(interval);
        const finalSlots = [
          symbols[Math.floor(Math.random() * symbols.length)],
          symbols[Math.floor(Math.random() * symbols.length)],
          symbols[Math.floor(Math.random() * symbols.length)],
        ];
        setSlots(finalSlots);
        setSpinning(false);

        if (finalSlots[0] === finalSlots[1] && finalSlots[1] === finalSlots[2]) {
          const winAmount = 100;
          setBalance(balance() + winAmount);
          setMessage(`WINNER! +${winAmount} PLN! (Triple ${finalSlots[0]})`);
        } else {
          setMessage("Try again! -10 PLN");
        }
      }
    }, 100);
  };

  return (
    <div class="gamePanel">
      <h3>Slot Machine</h3>
      <div style={{ "font-size": "2rem", "margin-bottom": "1rem", "letter-spacing": "10px" }}>
        <For each={slots()}>{(symbol) => <span>{symbol}</span>}</For>
      </div>
      <button 
        onClick={spin} 
        disabled={spinning()}
        style={{ padding: "10px 20px", cursor: spinning() ? "not-allowed" : "pointer" }}
      >
        {spinning() ? "Spinning..." : "SPIN"}
      </button>
      <p>{message()}</p>
    </div>
  );
};

export default SlotMachine;
