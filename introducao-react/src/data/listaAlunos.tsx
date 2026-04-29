export interface Aluno {
  id: number;
  nome: string;
  curso: string;
  ativo: boolean;
}

export const alunos: Aluno[] = [
  {
    id: 1,
    nome: "Diego Áquila",
    curso: "Desenvolvimento de Sistemas",
    ativo: true,
  },
  {
    id: 2,
    nome: "Gabriel Martins",
    curso: "Desenvolvimento de Sistemas",
    ativo: true,
  },
  {
    id: 3,
    nome: "Heitor Leão",
    curso: "Desenvolvimento de Sistemas",
    ativo: true,
  },
  {
    id: 4,
    nome: "Isadora Almeida",
    curso: "Desenvolvimento de Sistemas",
    ativo: true,
  },
  {
    id: 5,
    nome: "David Carlos",
    curso: "Desenvolvimento de Sistemas",
    ativo: false,
  },
  {
    id: 6,
    nome: "Diego de Jesus",
    curso: "Desenvolvimento de Sistemas",
    ativo: false,
  },
];

export const alunosTII: Aluno[] = [
  {
    id: 1,
    nome: "Diego Áquila",
    curso: "Tecnico Informática para Internet",
    ativo: true,
  },
  {
    id: 2,
    nome: "Gabriel Martins",
    curso: "Tecnico Informática para Internet",
    ativo: true,
  },
  {
    id: 3,
    nome: "Heitor Leão",
    curso: "Tecnico Informática para Internet",
    ativo: true,
  },
  {
    id: 4,
    nome: "Isadora Almeida",
    curso: "Tecnico Informática para Internet",
    ativo: true,
  },
  {
    id: 5,
    nome: "David Carlos",
    curso: "Tecnico Informática para Internet",
    ativo: false,
  },
  {
    id: 6,
    nome: "Diego de Jesus",
    curso: "Tecnico Informática para Internet",
    ativo: false,
  },
];
