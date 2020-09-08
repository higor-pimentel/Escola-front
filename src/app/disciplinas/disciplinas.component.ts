import { Component, OnInit } from "@angular/core";
import {
  PoBreadcrumb,
  PoTableColumn,
  PoPageAction,
  PoDisclaimerGroup,
  PoResponseApi,
} from "@po-ui/ng-components";
import { Disciplina } from "../entities/disciplina/disciplina.interface";
import { DisciplinasService } from "../services/disciplinas/disciplinas.service";
import { ResponseApi } from "../entities/response/response.interface";

@Component({
  selector: "app-disciplinas",
  templateUrl: "./disciplinas.component.html",
  styleUrls: ["./disciplinas.component.css"],
})
export class DisciplinasComponent implements OnInit {
  public loading = true;
  public hasNext = false;
  disclaimerGroup: PoDisclaimerGroup;
  actions: Array<PoPageAction>;
  colunasTable: PoTableColumn[];
  private listaDeDisciplinas: Disciplina[];
  disciplinas: Disciplina[];
  private searchTerm: string = "";
  breadcrumb: PoBreadcrumb = {
    items: [{ label: "Home", link: "/" }, { label: "Disciplinas" }],
  };
  constructor(private disciplinasService: DisciplinasService) {}

  ngOnInit(): void {
    this.disciplinasService.getAll().subscribe((response: PoResponseApi) => {
      this.listaDeDisciplinas = response.items;
      this.loading = false;
    });
  }
}
