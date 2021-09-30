import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Chats from "../Chats";
import HomePage from "../Home";
import UserProfil from "../components/Profil";
import { News } from "../components/News/News";
import { PrivateRoute } from "../components/PrivateRoute";
import { useState } from "react";
import { PublicRoute } from "../components/PublicRoute";
import { login, signUp, signOut, auth } from "../services/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

export const Routes = () => {
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        });

        return unsubscribe;
    }, []);

    const handleLogin = async (email, pass) => {
        try {
            await login(email, pass);
        } catch (event) {
            console.log(event);
        }
    };

    const handleSignUp = async (email, pass) => {
        try {
            await signUp(email, pass);
        } catch (event) {
            console.log(event);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to="/chats">CHATS</Link>
                </li>
                <li>
                    <Link to="/profil">Profile</Link>
                </li>
                <li>
                    <Link to="/news">News</Link>
                </li>
            </ul>
            <Switch>
                <PublicRoute path="/login" exact authed={authed}>
                    <HomePage onLogin={handleLogin} />
                </PublicRoute>
                <PublicRoute path="/signup" exact authed={authed}>
                    <HomePage onSignUp={handleSignUp} />
                </PublicRoute>
                <PrivateRoute path="/chats/:chatId?" authed={authed}>
                    <Chats />
                </PrivateRoute>
                <PrivateRoute path="/profil" exact authed={authed}>
                    <UserProfil onLogout={handleLogout} />
                </PrivateRoute>
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