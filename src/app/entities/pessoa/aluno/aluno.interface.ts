import { Pessoa } from "../pessoa.interface";
import { Turma } from "../../turma/turma.interface";

export interface Aluno extends Pessoa {
  matricula: number;
  formaIngresso: string;
  turmas: Turma[];
}
