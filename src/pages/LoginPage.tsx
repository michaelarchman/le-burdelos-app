import './LoginPage.css'

const LoginPage = () => {
    return (
        <div class="login">
            <h1>Logowanie</h1>
            <form>
                <input type="text" placeholder="Nazwa użytkownika" required />
                <input type="password" placeholder="Hasło" required />
                <button type="submit" class="btn">Zaloguj się</button>
            </form>
        </div>
    );
};

export default LoginPage