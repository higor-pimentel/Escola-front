import { Professor } from "../pessoa/professor/professor.interface";
import { Turma } from "../turma/turma.interface";

export interface Disciplina {
  descricao: string;
  sigla: string;
  cargaHoraria: number;
  professor: Professor;
  turmas: Turma[];
}
