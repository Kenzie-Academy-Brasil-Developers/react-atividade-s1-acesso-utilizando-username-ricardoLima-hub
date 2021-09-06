function WelcomePage ({user, setIsLoggedIn}) {
    
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
    
    return (
        <>
            <p>Bem Vindo, {user}!</p>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default WelcomePage