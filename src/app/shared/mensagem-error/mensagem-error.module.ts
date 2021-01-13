import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MensagemErrorComponent} from './mensagem-error.component';

@NgModule({
    declarations: [MensagemErrorComponent],
    imports: [
        CommonModule
    ],
    exports: [MensagemErrorComponent]
})
export class MensagemErrorModule {
}
