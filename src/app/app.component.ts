import { Component, OnInit } from "@angular/core";

import { PoMenuItem } from "@po-ui/ng-components";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  readonly itensMenu: Array<PoMenuItem> = [];

  ngOnInit(): void {
    this.definirItensMenu();
  }
  definirItensMenu() {
    this.itensMenu.push(
      { label: "Home", link: "/", icon: "po-icon-home" },
      { label: "Turmas", link: "/turmas", icon: "po-icon po-icon-arrow-right" },
      {
        label: "Disciplinas",
        link: "/disciplinas",
        icon: "po-icon po-icon-arrow-right",
      }
    );
  }
}
