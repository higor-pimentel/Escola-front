import { Aluno } from "../pessoa/aluno/aluno.interface";
import { Disciplina } from "../disciplina/disciplina.interface";

export interface Turma {
  id?: number;
  descricao: string;
  anoLetivo: number;
  periodoLetivo: number;
  numeroVagas: number;
  status: string;
  alunos: Aluno[];
  disciplinas: Disciplina[];
}
