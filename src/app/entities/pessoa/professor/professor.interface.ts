import { Pessoa } from "../pessoa.interface";
import { Disciplina } from "../../disciplina/disciplina.interface";

export interface Professor extends Pessoa {
  titulacao: string;
  disciplinas: Disciplina[];
}
