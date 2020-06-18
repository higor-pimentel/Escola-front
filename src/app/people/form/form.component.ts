import { Component, OnInit } from '@angular/core';
import { PoPageDynamicEditActions, PoPageDynamicEditField } from '@po-ui/ng-templates';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  title: string = 'Cadastro';

  fields: Array<PoPageDynamicEditField> = [ 
    {
    property: 'name',
    label: 'Nome',
    divider: 'DADOS PESSOAIS',
    required: true,
    minLength: 4,
    maxLength: 50,
    gridColumns: 6,
    gridSmColumns: 12,
    
  },
  {
    property: 'birthday',
    label: 'Data de Nascimento',
    type: 'date',
    format: 'mm/dd/yyyy',
    gridColumns: 6,
    gridSmColumns: 12,
    maxValue: '2010-01-01',
    errorMessage: 'The date must be before the year 2010.',
  },
  { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
  { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'] },
  {
    property: 'Teste',
    label: '',
  }
  ];

  constructor() { }

}
