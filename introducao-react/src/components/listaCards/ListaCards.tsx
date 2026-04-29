import { alunos, type Aluno } from "../../data/listaAlunos";
import Card from "../card/Card";

interface ListaCardsProps {
  corTitulo?: string;
  listaAlunos: Aluno[];
}

function ListaCards({ corTitulo = "#000000", listaAlunos }: ListaCardsProps) {
  return (
    <>
      {listaAlunos.map((aluno) => (
        //Aqui eu digo o que a função irá realizar
        <Card
          key={aluno.id}
          nomeAluno={aluno.nome}
          cursoAluno={aluno.curso}
          statusAluno={aluno.ativo}
          corTitulo={corTitulo}
        />
      ))}
    </>
  );
}
export default ListaCards;
