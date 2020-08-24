import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ResponseApi } from "./response";
import { environment } from "src/environments/environment";
import { Turma } from "../turma";

const API = environment.API_URL;

@Injectable({ providedIn: "root" })
export class TurmasListService {
  constructor(private http: HttpClient) {}

  getTurmas() {
    return this.http.get(`${API}/turmas`);
  }

  filterByDescription(turmas: Turma[], searchTerm: string) {
    searchTerm = searchTerm.trim().toLowerCase();

    if (searchTerm) {
      return turmas.filter((turma) =>
        turma.descricao.toLowerCase().includes(searchTerm)
      );
    } else {
      return turmas;
    }
  }

  getColumns() {
    return [
      {
        property: "descricao",
        label: "Descrição",
        type: "string",
      },
      {
        property: "anoLetivo",
        label: "Ano Letivo",
        type: "number",
        width: "10%",
      },
      { property: "periodoLetivo", label: "Período", width: "10%" },
      {
        property: "numeroVagas",
        label: "Número de Vagas",
        type: "number",
        width: "10%",
      },
      {
        property: "status",
        type: "label",
        width: "15%",
        labels: [
          {
            value: "aberta",
            color: "color-10",
            label: "Aberto",
            tooltip: "Status da Turma",
          },
          {
            value: "fechado",
            color: "color-07",
            label: "Fechado",
            tooltip: "Status da Turma",
          },
          {
            value: "limiteDeVagas",
            color: "color-08",
            label: "Vagas preenchidas",
            tooltip: "Status da Turma",
          },
        ],
      },
    ];
  }
}
