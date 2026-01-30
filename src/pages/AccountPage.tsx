import type { Component } from "solid-js";
interface AccountProps{
    user: string;
    email: string;
    nickname: string;
    balance: number;
}

const AccountPage: Component<AccountProps> = (props: AccountProps) => {
    return (
        <>
            <h1>Acoount</h1>
            <p>{props.user}</p>
            <p>Email: {props.email}</p>
            <p>Hi {props.nickname}</p>
            <p>Balance: {props.balance}zł</p>
            
        </>
    )
}

export default AccountPage