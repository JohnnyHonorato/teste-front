
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, MatDateFormats, MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {NgxMaskModule} from 'ngx-mask';
import {MensagemErrorModule} from '../../shared/mensagem-error/mensagem-error.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
    {
        path: '', component: ProductListComponent
    },
    {
        path: 'create', component: ProductEditComponent
    },
    {
        path: 'edit/:id', component: ProductEditComponent
    }
];

export const GRI_DATE_FORMATS: MatDateFormats = {
    ...MAT_NATIVE_DATE_FORMATS,
    display: {
        ...MAT_NATIVE_DATE_FORMATS.display,
        dateInput: 'YYYY-MM-DD',
    }
};
@NgModule({
    declarations: [ProductEditComponent, ProductListComponent, ProductEditComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MensagemErrorModule,
        NgxMaskModule.forRoot()
    ],
    exports: [RouterModule],
    providers: [
        MatDatepickerModule, { provide: MAT_DATE_FORMATS, useValue: GRI_DATE_FORMATS },
    ]
})
export class ProductModule {
}