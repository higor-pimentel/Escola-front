import { Component, OnInit } from "@angular/core";
import {
  PoPageDynamicTableActions,
  PoPageDynamicTableFilters,
} from "@po-ui/ng-templates";
import { environment } from "src/environments/environment";
import { PoBreadcrumb } from "@po-ui/ng-components";

const API = environment.API_URL;

@Component({
  selector: "app-turmas",
  templateUrl: "./turmas-list.component.html",
})
export class TurmasListComponent implements OnInit {
  public readonly serviceApi: string = `${API}\turmas`;

  actions: PoPageDynamicTableActions;

  breadcrumb: PoBreadcrumb;

  fields: Array<any> = [];

  constructor() {}

  ngOnInit() {
    this._definirPoPage();

    this._definirCampos();
  }
  private _definirCampos() {
    this.fields = [
      {
        property: "descricao",
        label: "Descrição",
        filter: true,
        gridColumns: 6,
        width: "30%",
      },
      { property: "anoLetivo", label: "Ano Letivo", filter: true },
      { property: "periodoLetivo", label: "Período" },
      { property: "numeroVagas" },
      {
        property: "status",
        type: "label",
        optionsMulti: true,
        filter: true,
        gridColumns: 5,
        options: [
          { value: "aberta", label: "Aberto" },
          { value: "fechado", label: "Fechado" },
          { value: "limiteDeVagas", label: "Vagas preenchidas" },
        ],
        labels: [
          { value: "aberta", color: "color-05", content: "A", label: "Aberto" },
          {
            value: "fechado",
            color: "color-02",
            content: "F",
            label: "Fechado",
          },
          {
            value: "limiteDeVagas",
            color: "color-08",
            content: "VP",
            label: "Vagas preenchidas",
          },
        ],
      },
    ];
  }
  private _definirPoPage() {
    this.actions = {
      detail: "turmas/view/:id",
      edit: "turmas/edit/:turmaId",
      new: "turmas/new/:turmaId",
      remove: true,
    };

    this.breadcrumb = {
      items: [{ label: "Home", link: "" }, { label: "Turmas" }],
    };
  }
}
