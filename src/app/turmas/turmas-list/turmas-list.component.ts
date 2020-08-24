import { Component, OnInit, ViewChild } from "@angular/core";
import { debounceTime } from "rxjs/operators";
import {
  PoBreadcrumb,
  PoPageAction,
  PoPageFilter,
  PoModalComponent,
  PoDisclaimerGroup,
  PoTableColumn,
  PoModalAction,
  PoPageListComponent,
} from "@po-ui/ng-components";

import { TurmasListService } from "./turmas-list.service";
import { Turma } from "../turma";
import { ResponseApi } from "./response";
import { Subject } from "rxjs";

@Component({
  selector: "app-turmas",
  templateUrl: "./turmas-list.component.html",
})
export class TurmasListComponent implements OnInit {
  public loading = true;
  public hasNext = false;
  disclaimerGroup: PoDisclaimerGroup;
  actions: Array<PoPageAction>;
  colunasTable: PoTableColumn[];
  private listaDeTurmas: Turma[];
  turmas: Turma[];
  private searchTerm: string = "";
  breadcrumb: PoBreadcrumb = {
    items: [{ label: "Home", link: "/" }, { label: "Turmas" }],
  };

  public readonly filterSettings: PoPageFilter = {
    action: this.filterAction.bind(this),
    advancedAction: this.openAdvancedFilter.bind(this),
    ngModel: "searchTerm",
    placeholder: "Search",
  };
  periodos: Array<string> = [];
  status: Array<string> = [];

  @ViewChild("advancedFilterModal") advancedFilter: PoModalComponent;

  constructor(private turmasService: TurmasListService) {}

  ngOnInit() {
    this._definirPoPage();
    this._definirColunas();
    this.loadData();
  }

  loadData() {
    this.turmasService.getTurmas().subscribe((response: ResponseApi) => {
      this.turmas = response.itens as Turma[];
      this.hasNext = response.hasNext;
      this.loading = false;
      this.listaDeTurmas = this.turmas;
      console.log(this.turmas);
    });
  }
  private _definirColunas() {
    this.colunasTable = this.turmasService.getColumns();
  }
  private _definirPoPage() {
    this.actions = [
      //Usar Router.navigate([])
      { label: "Criar Turma", url: "turmas/new/:turmaId" },
      { label: "Editar", url: "turmas/edit/:turmaId" },
      { label: "Detalhes", url: "turmas/view/:id" },
      { label: "Remover", action: this.removerTurma.bind(this) },
    ];
  }

  filterAction() {
    if (this.searchTerm.trim()) {
      this.listaDeTurmas = this.turmasService.filterByDescription(
        this.turmas,
        this.searchTerm
      );
    } else {
      this.listaDeTurmas = this.turmas;
    }
  }

  openAdvancedFilter() {
    this.advancedFilter.open();
  }
  removerTurma() {}
}
