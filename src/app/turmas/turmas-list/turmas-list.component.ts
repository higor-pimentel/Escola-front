import { Component, OnInit } from "@angular/core";
import {
  PoPageDynamicTableActions,
  PoPageDynamicTableFilters,
} from "@po-ui/ng-templates";

const url = "http://localhost:5000/turmas";

@Component({
  selector: "app-turmas",
  templateUrl: "./turmas-list.component.html",
})
export class TurmasListComponent implements OnInit {
  public readonly serviceApi: string = url;

  public readonly actions: PoPageDynamicTableActions = {
    detail: "turmas/view/:id",
    edit: "turmas/new?:id",
    new: "turmas/new",
    remove: true,
  };

  public readonly fields: Array<any> = [
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
        { value: "fechado", color: "color-02", content: "F", label: "Fechado" },
        {
          value: "limiteDeVagas",
          color: "color-08",
          content: "VP",
          label: "Vagas preenchidas",
        },
      ],
    },
  ];
  turmas: Array<PoPageDynamicTableFilters>;

  constructor() {}

  ngOnInit() {}
}
