import { Injectable } from "@angular/core";
import { PoDynamicFormField, PoStepperStatus } from "@po-ui/ng-components";
import { Validators } from "@angular/forms";

@Injectable()
export class TurmasDaoService {
  get camposTurma(): Array<PoDynamicFormField> {
    let data = new Date().getFullYear();
    return [
      {
        property: "descricao",
        label: "Descrição",
        type: "text",
        gridColumns: 12,
        required: true,
        maxLength: 120,
      },
      {
        property: "anoLetivo",
        type: "number",
        label: "Ano Letivo",
        required: true,
        gridColumns: 2,
        minValue: 2000,
        maxValue: data,
        errorMessage: "Ano inválido!",
      },
      {
        property: "periodoLetivo",
        type: "number",
        label: "Período",
        gridColumns: 2,
        minValue: 1,
        optional: true,
        errorMessage: "Período inválido!",
      },
      {
        property: "numeroVagas",
        type: "number",
        required: true,
        gridColumns: 2,
        minValue: 0,
        maxValue: 60,
        errorMessage: "Valor inválido!",
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

  camposDisciplinas(modal?: boolean): Array<PoDynamicFormField> {
    if (modal) {
      return [
        {
          property: "nome",
          label: "Nome",
          type: "text",
          gridColumns: 11,
          required: true,
        },
        {
          property: "cargaHoraria",
          label: "CH",
          type: "numer",
          gridColumns: 4,
          required: true,
        },
      ];
    }
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
        visible: false,
      },
    ];
  }
  camposAlunos(modal?: boolean): Array<PoDynamicFormField> {
    if (modal) {
      return [
        {
          property: "nome",
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
        visible: false,
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
      },
      {
        label: "Disciplinas",
        primaryLabelWidget: StepLabels.PREVIOUS,
        secondaryLabelWidget: StepLabels.NEXT,
        modalForm: this.camposDisciplinas(true),
      },
      {
        label: "Alunos",
        primaryLabelWidget: StepLabels.PREVIOUS,
        secondaryLabelWidget: StepLabels.NEXT,
        modalForm: this.camposDisciplinas(true),
      },
      {
        label: "Confirmação",
        primaryLabelWidget: StepLabels.PREVIOUS,
        secondaryLabelWidget: StepLabels.FINAL,
      },
    ];
  }

  get allFields(): Array<PoDynamicFormField> {
    return [].concat(
      this.camposTurma,
      this.camposDisciplinas(),
      this.camposAlunos()
    );
  }
}

enum StepLabels {
  NEXT = "Próximo",
  PREVIOUS = "Anterior",
  FINAL = "Confirmar",
}
