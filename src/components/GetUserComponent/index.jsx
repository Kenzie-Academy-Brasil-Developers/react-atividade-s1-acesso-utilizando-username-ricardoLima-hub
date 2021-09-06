import { useState } from "react";

function GetUserComponent ({setUser, setIsLoggedIn}) {
    
    const [userInput, setUserInput] = useState("")

    const handleLogin = (userInput) => {
        setUser(userInput);
        setIsLoggedIn(true);
    }
    
    return (
        <>
            <form>
                <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
                <button onClick={()=> handleLogin(userInput)}>Acessar com o nome</button>
            </form>
        </>
    )

}

export default GetUserComponent