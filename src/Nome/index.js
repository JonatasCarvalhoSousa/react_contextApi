import { useContext } from "react";
import {UserContext} from "../contexts/user"


function Nome() {
const {alunos, setAlunos} = useContext(UserContext)
    return (
        <div>
          <span >Seja bem vindo: {alunos}</span>
          <br></br>
          <button onClick={() => setAlunos("Estevão Nabote")}> Trocar nome</button>
        </div>
    );
  }
  
  export default Nome;
  