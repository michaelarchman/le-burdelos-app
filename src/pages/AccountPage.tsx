import type { Component } from "solid-js";
import './AccountPage.css';
import Topbar from "../components/Topbar";

interface AccountProps {
    user: string;
    email: string;
    nickname: string;
    balance: number;
}

const AccountPage: Component<AccountProps> = (props: AccountProps) => {
    return (
        <div class="account-container">
            <Topbar/>
            <header class="account-header">
                <h1>Konto użytkownika</h1>
                <p>Witaj, {props.nickname}!</p>
            </header>

            <section class="account-section">
                <h2>Informacje o profilu</h2>
                <div class="info-grid">
                    <div class="info-label">Użytkownik:</div>
                    <div class="info-value">{props.user}</div>
                    
                    <div class="info-label">Email:</div>
                    <div class="info-value">{props.email}</div>
                    
                    <div class="info-label">Pseudonim:</div>
                    <div class="info-value">{props.nickname}</div>
                </div>
            </section>

            <section class="account-section">
                <h2>Saldo</h2>
                <div class="balance-card">
                    <span>Dostępne środki:</span>
                    <span class="balance-amount">{props.balance} zł</span>
                </div>
            </section>

            <section class="account-section">
                <h2>Ustawienia</h2>
                <div class="placeholder-text">Opcje zmiany hasła i ustawienia powiadomień będą dostępne wkrótce.</div>
            </section>
        </div>
    );
};

export default AccountPage;
