import {OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

export abstract class BaseComponent implements OnInit {

    protected constructor() {
    }

    ngOnInit(): void {

    }

    protected hasError(control: AbstractControl): string {
        return control && control.touched && control.invalid ? 'is-invalid state-invalid' : '';
    }

}
