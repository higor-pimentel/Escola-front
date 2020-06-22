import { Component, Input } from '@angular/core';
import { PoPageDynamicEditActions } from '@po-ui/ng-templates';
import { PoBreadcrumb } from '@po-ui/ng-components';


@Component({
    selector: 'app-turmas-form',
    templateUrl: './turmas-form.component.html'
})
export class TurmasFormComponent {
    
    @Input() id: string = '';

    public readonly serviceApi: string = 'http://localhost:5000/turma/' + this.id;

    public readonly actions: PoPageDynamicEditActions = {
        save: 'turmas',
        saveNew: 'turmas/new',
        cancel: 'turmas'
    };

    public readonly breadcrumb: PoBreadcrumb = {
        items: [
            {label: 'Home', link: '/'},
            {label: 'Turmas', link: '/turmas'},
            {label: 'Turma'}
        ]
    }

    fields = [
        {property: 'descricao', label: 'Descrição' , type: 'text', gridColumns: 11, required: true},
        {property: 'anoLetivo', type: 'number' ,label: 'Ano Letivo', required: true, gridColumns: 2},
        {property: 'periodoLetivo', type: 'number' ,label: 'Período', gridColumns: 2},
        {property: 'numeroVagas', type: 'number' ,required: true, gridColumns: 2},
        {property: 'status',type: 'label', booleanFalse: "Fechada" , required: true,gridColumns: 5,
            options: [
                {value: 'aberta', label: 'Aberto'},
                {value: 'fechado', label: 'Fechado'},
                {value: 'limiteDeVagas', label: 'Vagas preenchidas'}
            ]
        }
    ];




}