import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Disciplina } from "src/app/entities/disciplina/disciplina.interface";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

const API = environment.API_URL;

@Injectable({ providedIn: "root" })
export class DisciplinasService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${API}/disciplinas`);
  }

  criarDisciplinas(disciplina: Disciplina) {
    console.log(disciplina);
  }
}
