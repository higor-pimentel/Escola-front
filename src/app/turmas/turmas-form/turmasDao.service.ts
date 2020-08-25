import { Injectable } from "@angular/core";
import { PoDynamicFormField, PoStepperStatus } from "@po-ui/ng-components";

@Injectable()
export class TurmasDaoService {
  get camposTurma(): Array<PoDynamicFormField> {
    return [
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

  get camposDisciplinas(): Array<PoDynamicFormField> {
    return [
      {
        property: "disciplinas",
        gridColumns: 6,
        gridSmColumns: 12,
        options: [
          { label: "Cálculo", value: 1 },
          { label: "Física", value: 2 },
          { label: "Geometria analítica", value: 3 },
          { label: "Matemática", value: 4 },
        ],
        optionsMulti: true,
      },
    ];
  }
  camposAlunos(modal: boolean): Array<PoDynamicFormField> {
    if (modal) {
      return [
        {
          property: "Nome",
          label: "Nome",
          type: "text",
          gridColumns: 11,
          required: true,
        },
        {
          property: "cpf",
          type: "number",
          label: "CPF",
          required: true,
          gridColumns: 4,
        },
        {
          property: "anoMatricula",
          type: "number",
          label: "Ano de matrícula",
          required: true,
          gridColumns: 3,
        },
        {
          property: "matricula",
          type: "number",
          label: "Matrícula",
          required: true,
          gridColumns: 3,
        },
      ];
    }
    return [
      {
        property: "alunos",
        gridColumns: 6,
        gridSmColumns: 12,
        options: [
          { label: "João", value: 1 },
          { label: "Paulo", value: 2 },
          { label: "Julia", value: 3 },
          { label: "Fulana", value: 4 },
        ],
        optionsMulti: true,
      },
    ];
  }
  get camposProfessores(): Array<PoDynamicFormField> {
    return;
  }
  get steps() {
    return [
      {
        label: "Turma",
        status: PoStepperStatus.Default,
        primaryLabelWidget: " ",
        secondaryLabelWidget: StepLabels.NEXT,
        form: this.camposTurma,
      },
      {
        label: "Disciplinas",
        primaryLabelWidget: StepLabels.PREVIOUS,
        secondaryLabelWidget: StepLabels.NEXT,
        form: this.camposDisciplinas,
      },
      {
        label: "Alunos",
        primaryLabelWidget: StepLabels.PREVIOUS,
        secondaryLabelWidget: StepLabels.NEXT,
        form: this.camposAlunos(false),
        modalForm: this.camposAlunos(true),
      },
      {
        label: "Confirmação",
        primaryLabelWidget: StepLabels.PREVIOUS,
        secondaryLabelWidget: StepLabels.FINAL,
      },
    ];
  }
}

enum StepLabels {
  NEXT = "Próximo",
  PREVIOUS = "Anterior",
  FINAL = "Confirmar",
}
