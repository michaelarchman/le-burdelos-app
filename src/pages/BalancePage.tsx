import type { Component } from "solid-js";

const BalancePage: Component = () => {
  return (
    <div class="balance-page">
      <div class="balance-box">
        <h2>💰 Doładuj saldo</h2>

        <input type="number" placeholder="Kwota (PLN)" />

        <select>
          <option>Karta płatnicza</option>
          <option>BLIK</option>
          <option>Google Pay</option>
          <option>Apple Pay</option>
        </select>

        <button
          onClick={() => alert("Wpłata przyjęta (symulacja)")}
        >
          Wpłać środki
        </button>
      </div>
    </div>
  );
};

export default BalancePage;