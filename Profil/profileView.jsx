export const ProfileView = ({ name, showName, checked, onSubmit, textChange, inputChange }) => {
    return (
        <div>
            <h3>
                Здесь находится Ваш профиль.
            </h3>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={textChange} />
                <button type="submit">Submit</button>
            </form>
            <input
                className="input_check"
                type="checkbox"
                checked={checked}
                value={showName}
                onChange={inputChange}
            />
            {showName && < div > {name}</div>}
        </div >
    )
}