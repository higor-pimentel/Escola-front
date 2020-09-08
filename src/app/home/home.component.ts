import { Component, OnInit, ViewChild } from "@angular/core";
import {
  PoPageAction,
  PoModalComponent,
  PoBreadcrumb,
  PoNotificationService,
  PoModalAction,
} from "@po-ui/ng-components";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  private page: string = "";
  private title: string = "Escola Totvs";

  public readonly actions: Array<PoPageAction> = [
    {
      label: "Help",
      action: this.modalOpen.bind(this),
      icon: "po-icon po-icon-help",
    },
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: "Home", link: "/" }, { label: "Dashboard" }],
  };

  public readonly cancelAction: PoModalAction = {
    action: () => {
      this.modalClose();
    },
    label: "Cancel",
  };

  public readonly shareAction: PoModalAction = {
    action: () => {
      this.help();
    },
    label: "Help",
  };

  @ViewChild("formHelp", { static: true }) formHelp: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  constructor(
    private poNotification: PoNotificationService,
    private router: Router
  ) {}

  loadTurmas(widget: string) {
    this.router.navigate([widget]);
  }

  loadDisciplinas(widget: string) {
    this.router.navigate([widget]);
  }

  modalClose() {
    this.poModal.close();
    this.formHelp.reset();
  }

  modalOpen() {
    this.poModal.open();
  }

  help() {
    if (this.formHelp.valid) {
      this.poNotification.success(
        `To get help please acess our help ${this.page}.`
      );
    } else {
      this.poNotification.error(``);
    }
    this.modalClose();
  }
}
