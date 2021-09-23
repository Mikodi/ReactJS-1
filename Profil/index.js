import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { changeName, toggleShowName } from "../Store/profile/action";
import { useState } from "react";
import { ProfileView } from "./profileView";

const UserProfil = () => {
    const showName = useSelector((state) => state.profile.showName);
    const name = useSelector((state) => state.profile.name);
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(changeName(value));
        setValue('');
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
    }, [dispatch]);

    return (
        <ProfileView
            name={name}
            showName={showName}
            value
            checked={showName}
            onSubmit={handleSubmit}
            textChange={handleChange}
            inputChange={setShowName}>

        </ProfileView>
    )
}

export default UserProfil;