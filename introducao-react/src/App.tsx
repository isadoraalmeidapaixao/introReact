import "./App.css";
import Cabecalho from "./components/cabecalho/Cabecalho";
import ListaCards from "./components/listaCards/ListaCards";
import Rodape from "./components/rodape/Rodape";
import { alunos, alunosTII } from "./data/listaAlunos";

function App() {
  return (
    <>
      <div className="componentes">
        <Cabecalho />

        <ListaCards listaAlunos={alunos} corTitulo="red" />
        <ListaCards listaAlunos={alunosTII} corTitulo="blue" />

        <Rodape />
      </div>
    </> //Fragment -> Não aparece no código HTML
  );
}

export default App;
