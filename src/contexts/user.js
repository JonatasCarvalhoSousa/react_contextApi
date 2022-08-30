import { useState, createContext } from "react";

export const UserContext = createContext({});

function UserProveider({children}){
    const [alunos, setAlunos] = useState("Betania bethe")
    const [qtaAlunos, setQtaAlunos] = useState(1054642132)
    return(
        <UserContext.Provider value={{alunos, setAlunos, qtaAlunos}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProveider