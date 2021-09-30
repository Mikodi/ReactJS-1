import React from "react";
import { changeName } from "../Store/profile/action";
import { useState, useDispatch } from "react";
import { ref, set, onValue } from "firebase/database";
import { db } from "../../services/firebase";
import { useEffect } from "react";

const UserProfil = ({ onLogout }) => {
    const dispatch = useDispatch();

    const [value, setValue] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        const userDbRef = ref(db, 'user');
        onValue(userDbRef, (snapshot) => {
            const data = snapshot.val();
            setName(data?.username || '');
        }, []);
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(changeName(value));
        setValue('');
        set(ref(db, 'user'), {
            username: value,
        })
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleClick = () => {
        onLogout();
    }

    return (
        <>
            <button onClick={handleClick}>Logout</button>
            <div>
                <h3>
                    Здесь находится Ваш профиль.
                </h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={value} onChange={handleChange} />
                    <button type="submit">Submit</button>
                </form>
                <div>{name}</div>
            </div >
        </>
    )
}

export default UserProfil;