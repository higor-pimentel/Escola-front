import { Component, Input, OnInit } from "@angular/core";
import { PoPageDynamicEditActions } from "@po-ui/ng-templates";
import { PoBreadcrumb, PoDynamicFormField } from "@po-ui/ng-components";
import { environment } from "src/environments/environment";

var API = environment.API_URL;

@Component({
  selector: "app-turmas-form",
  templateUrl: "./turmas-form.component.html",
})
export class TurmasFormComponent implements OnInit {
  @Input() id: string = "123";

  public readonly serviceApi: string = API + "/turma?" + this.id;

  actions: PoPageDynamicEditActions;

  breadcrumb: PoBreadcrumb;

  fields: Array<PoDynamicFormField>;

  ngOnInit(): void {
    this._definirPoPage();

    this._definirCampos();
  }

  private _definirPoPage() {
    this.actions = {
      save: "turmas",
      saveNew: "turmas/new",
      cancel: "turmas",
    };

    this.breadcrumb = {
      items: [
        { label: "Home", link: "/" },
        { label: "Turmas", link: "/turmas" },
        { label: "Turma" },
      ],
    };
  }

  private _definirCampos() {
    this.fields = [
      {
        property: "descricao",
        label: "Descrição",
        type: "text",
        gridColumns: 11,
        required: true,
      },
      {
        property: "anoLetivo",
        type: "number",
        label: "Ano Letivo",
        required: true,
        gridColumns: 2,
      },
      {
        property: "periodoLetivo",
        type: "number",
        label: "Período",
        gridColumns: 2,
      },
      {
        property: "numeroVagas",
        type: "number",
        required: true,
        gridColumns: 2,
      },
      {
        property: "status",
        type: "label",
        booleanFalse: "Fechada",
        required: true,
        gridColumns: 5,
        options: [
          { value: "aberta", label: "Aberto" },
          { value: "fechado", label: "Fechado" },
          { value: "limiteDeVagas", label: "Vagas preenchidas" },
        ],
      },
    ];
  }
}
