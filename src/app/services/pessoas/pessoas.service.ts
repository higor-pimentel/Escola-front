import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Aluno } from "src/app/entities/pessoa/aluno/aluno.interface";
import { Pessoa } from "src/app/entities/pessoa/pessoa.interface";
import { Professor } from "src/app/entities/pessoa/professor/professor.interface";

const API = environment.API_URL;

@Injectable({ providedIn: "root" })
export class PessoasService {
  constructor(private http: HttpClient) {}

  getAllAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${API}/alunos`);
  }
  getAllProfessores(): Observable<Professor[]> {
    return this.http.get<Professor[]>(`${API}/professores`);
  }

  criarIndividuo(pessoa: Pessoa) {
    console.log(pessoa);
  }
}
