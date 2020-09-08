import {
  Component,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnChanges,
  EventEmitter,
} from "@angular/core";
import { PoPageDynamicEditActions } from "@po-ui/ng-templates";
import {
  PoBreadcrumb,
  PoDynamicFormField,
  PoPageAction,
  PoStepperComponent,
  PoStepperItem,
  PoStepperStatus,
  PoModalAction,
  PoModalComponent,
  PoDynamicFormComponent,
  PoNotificationService,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
} from "@po-ui/ng-components";
import { environment } from "src/environments/environment";
import { NgForm, NgModelGroup, Validators } from "@angular/forms";
import { TurmasDaoService } from "../../services/turmas/turmasDao.service";
import { TurmasService } from "src/app/services/turmas/turmas-list.service";
import { DisciplinasService } from "src/app/services/disciplinas/disciplinas.service";
import { PessoasService } from "src/app/services/pessoas/pessoas.service";

@Component({
  selector: "app-turmas-form",
  templateUrl: "./turmas-form.component.html",
})
export class TurmasFormComponent implements OnInit {
  @Input() id: string = "123";

  stepForm: NgForm;

  modalForm: NgForm;

  steps: Array<any>;
  camposValidados: string[];

  breadcrumb: PoBreadcrumb;

  fields: Array<PoDynamicFormField>;
  modalFields: Array<PoDynamicFormField>;

  passoAtual: string;

  @ViewChild("modal", { static: false }) modal: PoModalComponent;
  @ViewChild("stepper", { static: true }) stepper: PoStepperComponent;

  constructor(
    private disciplinasService: DisciplinasService,
    private pessoasService: PessoasService,
    private turmasService: TurmasService,
    private turmasDao: TurmasDaoService,
    public poNotification: PoNotificationService
  ) {}

  ngOnInit(): void {
    this._definirPoPage();
    this.camposValidados = ["status", "disciplinas", "alunos"];
  }

  private _definirPoPage() {
    this.breadcrumb = {
      items: [
        { label: "Home", link: "/" },
        { label: "Turmas", link: "/turmas" },
        { label: "Nova turma" },
      ],
    };

    this.steps = this.turmasDao.steps;
    this.fields = this.turmasDao.camposDisciplinas;
  }

  getForm(form: NgForm) {
    this.stepForm = form;
  }
  getModalForm(form: NgForm) {
    this.modalForm = form;

    this.modal.primaryAction = {
      label: "Salvar",
      action: () => {
        this.modalForm.onSubmit(event);
        this.modal.close();
        this.modal.title == "Criar Disciplina"
          ? this.disciplinasService.criarDisciplinas(this.modalForm.value)
          : this.pessoasService.criarIndividuo(this.modalForm.value);

        this.modalForm.reset();
      },
    };
  }

  etapaAnterior(event: Event, stepper: PoStepperComponent, passo: string) {
    console.log(passo);
    console.log(this.stepForm.value);
    stepper.previous();
  }
  proximaEtapa(
    event: Event,
    stepper2: PoStepperComponent,
    passo: string,
    invalid: boolean
  ) {
    this.stepForm.onSubmit(event);

    if (invalid) {
      this.poNotification.warning("Dados inválidos!");
      return;
    }
    console.log(this.stepper.currentStepIndex);
    this.stepper.next();
  }

  comfirmStep(stepper: PoStepperComponent) {
    console.log(stepper.poSteps);
  }

  abrirModal(step) {
    step.label == "Disciplinas"
      ? ((this.modalFields = this.turmasDao.camposDisciplinasModal),
        (this.modal.title = "Criar Disciplina"))
      : ((this.modalFields = this.turmasDao.camposAlunos(true)),
        (this.modal.title = "Criar Aluno"));

    this.modal.open();
  }
}
