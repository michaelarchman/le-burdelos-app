import type { Component } from "solid-js";

const RegisterPage: Component = () => {
  return (
    <div class="register-page">
      <div class="register-box">
        <h2>Rejestracja</h2>
        <input type="text" placeholder="Name" /><br />
        <input type="text" placeholder="Email" /> <br />
         <input type="password" placeholder="Hasło" /> <br />
        <input type="password" placeholder="Powtórz Hasło" /><br />
        <button>Zarejestruj się</button>
      </div>
    </div>
  );
};

export default RegisterPage;
