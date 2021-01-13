import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserEditComponent} from './user-edit/user-edit.component';
import {RouterModule, Routes} from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, MatDateFormats, MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {NgxMaskModule} from 'ngx-mask';
import {MensagemErrorModule} from '../../shared/mensagem-error/mensagem-error.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    {
        path: '', component: UserListComponent
    },
    {
        path: 'create', component: UserEditComponent
    },
    {
        path: 'edit/:id', component: UserEditComponent
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
    declarations: [UserEditComponent, UserListComponent],
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
export class UserModule {
}
