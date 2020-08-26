import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { PoPageDynamicEditActions } from "@po-ui/ng-templates";
import {
  PoBreadcrumb,
  PoDynamicFormField,
  PoPageAction,
  PoStepperComponent,
  PoStepperItem,
  PoStepperStatus,
} from "@po-ui/ng-components";
import { environment } from "src/environments/environment";
import { NgForm, NgModelGroup } from "@angular/forms";
import { TurmasDaoService } from "./turmasDao.service";

@Component({
  selector: "app-turmas-form",
  templateUrl: "./turmas-form.component.html",
})
export class TurmasFormComponent implements OnInit {
  @Input() id: string = "123";

  @ViewChild(PoStepperComponent) poStepperComponent: PoStepperComponent;

  actions: PoPageAction[];

  steps: Array<any>;

  breadcrumb: PoBreadcrumb;

  fields: Array<PoDynamicFormField>;

  dynamicForm: NgForm;

  @ViewChild("Turma", { static: true }) turmaForm: NgForm;

  constructor(private turmasDao: TurmasDaoService) {}

  ngOnInit(): void {
    this._definirPoPage();
  }

  private _definirPoPage() {
    this.actions = [
      { label: "Salvar", url: "turmas" },
      { label: "Cancelar", url: "turmas" },
    ];

    this.breadcrumb = {
      items: [
        { label: "Home", link: "/" },
        { label: "Turmas", link: "/turmas" },
        { label: "Nova turma" },
      ],
    };

    this.steps = this.turmasDao.steps;
  }
}
