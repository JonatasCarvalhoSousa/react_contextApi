import Aluno from "./Alunos";

import UserProveider from "./contexts/user";

function App() {

  return (
    <UserProveider>
      <div>
        <h1>Escola</h1>
        <hr></hr>
        <Aluno/>
      </div>
      </UserProveider>
  );
}

export default App;
