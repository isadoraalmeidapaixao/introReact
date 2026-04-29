import "./Card.css";

interface CardProps {
  nomeAluno: string; //obrigatório, texto
  cursoAluno: string; // obrigatório
  statusAluno?: boolean; //opcional
  corTitulo?: string;
}

function Card({
  nomeAluno,
  cursoAluno,
  statusAluno = true,
  corTitulo = "#000000",
}: CardProps) {
  return (
    <div className="card-aluno">
      <h2 style={{ color: corTitulo }}>{nomeAluno}</h2>
      <p>{cursoAluno}</p>
      <p>Status aluno: {statusAluno ? "✅" : "⛔"}</p>
      <button onClick={() => alert(nomeAluno)}>Saudar!!</button>
    </div>
  );
}

export default Card;
