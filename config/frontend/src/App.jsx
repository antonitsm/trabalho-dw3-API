import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    api.get("estudantes/")
      .then((res) => {
        setDados(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>estudantes</h1>

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