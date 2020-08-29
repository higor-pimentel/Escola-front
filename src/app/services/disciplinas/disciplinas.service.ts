import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Discilpina } from "src/app/entities/disciplina/disciplina.interface";

@Injectable({ providedIn: "root" })
export class DisciplinasService {
  constructor(private http: HttpClient) {}

  criarDisciplinas(disciplina: Discilpina) {
    console.log(disciplina);
  }
}
