import styles from "./LoginPage.module.css";

const LoginPage = () => {
    return (
        <div class={styles.loginContainer}> 
            <div class={styles.login}>
                <h1>Logowanie</h1>
                <form>
                    <input type="text" placeholder="Nazwa użytkownika" required /> <br/>
                    <input type="password" placeholder="Hasło" required /> <br/>
                    <button type="submit" class={styles.btn}>Zaloguj się</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage