import Nome from "../Nome";
import {UserContext} from "../contexts/user"
import { useContext } from "react";

function Aluno() {
    const {qtaAlunos} = useContext(UserContext)
  return (
      <div>
        <h1>Quantidade total de Alunos: {qtaAlunos}</h1>
        <br></br>
        <Nome/>
      </div>
  );
}

export default Aluno;
