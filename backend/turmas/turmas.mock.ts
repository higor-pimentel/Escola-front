import { Turma } from "../../src/app/entities/turma/turma.interface";
import { alunos } from "../alunos/alunos.mock";
import { disciplinas } from "../disciplinas/disciplinas.mock";

export const collectionName = "turmas";

export const turmas: Turma[] = [
  {
    id: 123,
    descricao: "Uma turma de teste",
    anoLetivo: 2019,
    periodoLetivo: 10,
    numeroVagas: 20,
    status: "aberta",
    alunos: alunos,
    disciplinas: disciplinas,
  },
  {
    id: 122,
    descricao: "Uma turma de teste 1",
    anoLetivo: 2019,
    periodoLetivo: 10,
    numeroVagas: 30,
    status: "fechado",
    alunos: [],
    disciplinas: [],
  },
  {
    id: 223,
    descricao: "Uma turma de teste 2",
    anoLetivo: 2020,
    periodoLetivo: 10,
    numeroVagas: 50,
    status: "limiteDeVagas",
    alunos: [],
    disciplinas: [],
  },
];
