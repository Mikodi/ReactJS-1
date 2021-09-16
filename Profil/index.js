import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { toggleShowName } from "../Store/profile/action";

const UserProfil = () => {
    const showName = useSelector((store) => store.showName);
    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
    }, [dispatch]);

    return (
        <div>
            <h3>
                Здесь находится Ваш профиль.
            </h3>
            <input
                className="input_check"
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={setShowName}
            />

            {showName && <div>Show name is true</div>}
        </div>
    )
}

export default UserProfil;