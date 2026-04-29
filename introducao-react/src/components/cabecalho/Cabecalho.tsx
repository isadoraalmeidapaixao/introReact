//Convenção: nomes de componentes sempre começam com LETRA MAÍSCULA

function Cabecalho() {
  const nomeDoCurso = "Técnico em Desenvolvimento de Sistemas";
  const descricaoCurso =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus officiis voluptates saepe pariatur quaerat, numquam animi ipsa natus. Veniam porro quisquam quis vero at, quidem labore dicta iusto nostrum omnis!";
  const anoAtual = new Date().getFullYear();

  return (
    //Dentro do retorno, código Javascript deve estar dentro de "{}"
    <header>
      <h1>{nomeDoCurso}</h1>
      <p>{descricaoCurso}</p>
      <p>{anoAtual}</p>
    </header>
  );
}

//Exportar para utilizar em outros locais
export default Cabecalho;
