import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Chats from "../Chats";
import HomePage from "../Home";
import UserProfil from "../components/Profil";
import { News } from "../components/News/News";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/chats/:chatId?">
                    <Chats />
                </Route>
                <Route path="/profil">
                    <UserProfil />
                </Route>
                <Route path="/news">
                    <News />
                </Route>
                <Route>
                    <h3>Вы ввели идентификатор несуществующего чата</h3>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}