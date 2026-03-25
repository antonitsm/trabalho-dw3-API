import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [dados, setDados] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  // carregar estudantes
  function carregar() {
    api.get("estudantes/")
      .then((res) => {
        setDados(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    carregar();
  }, []);

  // cadastrar estudante
  function cadastrar(e) {
    e.preventDefault();

    api.post("estudantes/", {
      nome: nome,
      email: email,
    })
    .then(() => {
      setNome("");
      setEmail("");
      carregar(); // atualiza lista
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div>
      <h1>estudantes</h1>

      <form onSubmit={cadastrar}>
        <input
          placeholder="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">cadastrar</button>
      </form>

      <hr />

      {dados.map((e) => (
        <div key={e.id}>
          <p>{e.nome}</p>
          <p>{e.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;