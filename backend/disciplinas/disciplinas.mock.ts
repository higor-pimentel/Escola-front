import { Disciplina } from "../../src/app/entities/disciplina/disciplina.interface";

export const collectionName = "disciplinas";

export const disciplinas: Disciplina[] = [
  {
    descricao: "Disciplina de matemática",
    sigla: "MAT",
    cargaHoraria: 64,
    professor: {
      cpf: "145456789101",
      nome: "Fulano",
      email: "fulano@email.com",
      titulacao: "Mestre",
      disciplinas: [],
    },
    turmas: [],
  },
  {
    descricao: "Disciplina de física",
    sigla: "FIS",
    cargaHoraria: 64,
    professor: {
      cpf: "123456789101",
      nome: "Ciclano",
      email: "ciclano@email.com",
      titulacao: "Mestre",
      disciplinas: [],
    },
    turmas: [],
  },
  {
    descricao: "Disciplina de história",
    sigla: "HIS",
    cargaHoraria: 64,
    professor: {
      cpf: "123456789101",
      nome: "Maria",
      email: "maria@email.com",
      titulacao: "Doutora",
      disciplinas: [],
    },
    turmas: [],
  },
  {
    descricao: "Disciplina de geografia",
    sigla: "GEO",
    cargaHoraria: 64,
    professor: {
      cpf: "123450789101",
      nome: "João",
      email: "joao@email.com",
      titulacao: "Mestre",
      disciplinas: [],
    },
    turmas: [],
  },
  {
    descricao: "Disciplina de filosofia",
    sigla: "FIL",
    cargaHoraria: 64,
    professor: {
      cpf: "023456789101",
      nome: "Leandro",
      email: "leandro@email.com",
      titulacao: "Mestre",
      disciplinas: [],
    },
    turmas: [],
  },
];
