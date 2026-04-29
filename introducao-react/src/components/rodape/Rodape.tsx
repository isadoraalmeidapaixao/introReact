import "./Rodape.css";

function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer className="rodape">
      <p>© {ano} — Senac São Paulo</p>
    </footer>
  );
}

export default Rodape;
