export const ProfileView = ({ onSubmit, textChange, value, name }) => {
    return (
        <div>
            <h3>
                Здесь находится Ваш профиль.
            </h3>
            <form onSubmit={onSubmit}>
                <input type="text" value={value} onChange={textChange} />
                <button type="submit">Submit</button>
            </form>
            <div>Hello, {name}</div>
        </div >
    )
}