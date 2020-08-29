import { Turma } from "../src/app/entities/turma/turma.interface";

export const collectionName = "turmas";

export const turmas: Turma[] = [
  {
    id: 123,
    descricao: "Uma turma de teste",
    anoLetivo: 2019,
    periodoLetivo: 10,
    numeroVagas: 20,
    status: "aberta",
  },
  {
    id: 122,
    descricao: "Uma turma de teste 1",
    anoLetivo: 2019,
    periodoLetivo: 10,
    numeroVagas: 20,
    status: "fechado",
  },
  {
    id: 223,
    descricao: "Uma turma de teste 2",
    anoLetivo: 2019,
    periodoLetivo: 10,
    numeroVagas: 20,
    status: "limiteDeVagas",
  },
];
