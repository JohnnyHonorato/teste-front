import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-mensagem-error',
    templateUrl: './mensagem-error.component.html',
    styleUrls: ['./mensagem-error.component.scss']
})
export class MensagemErrorComponent {


    @Input() control: FormControl;

    constructor() {
    }

    getMessageErro(propertyName) {
        switch (propertyName) {
            case 'required':
                return 'Campo obrigatorio !';
            default:
                return 'Erro !';
        }
    }

    get errorMessage() {
        for (const propertyName in this.control?.errors) {
            if (
                this.control.errors.hasOwnProperty(propertyName) &&
                this.control.touched
            ) {
                return this.getMessageErro(propertyName);
            }
        }
        return null;
    }

}
