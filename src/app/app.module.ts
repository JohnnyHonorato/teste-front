import {BrowserModule} from '@angular/platform-browser';
import { Injector, NgModule} from '@angular/core';
import { setAppInjector } from './core/service/app.injector';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import {UserModule} from './components/user/user.module';
import {NotifierModule, NotifierOptions} from 'angular-notifier';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

const customNotifierOptions: NotifierOptions = {
    position: {
        horizontal: {
            position: 'right',
            distance: 12
        },
        vertical: {
            position: 'top',
            distance: 12,
            gap: 10
        }
    }
};

@NgModule({
    declarations: [
        AppComponent,
        BaseLayoutComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        ReactiveFormsModule,
        UserModule,
        NotifierModule.withConfig(customNotifierOptions),
        BrowserAnimationsModule,
        HttpClientModule,
        CoreModule
    ],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private injector: Injector) {
        setAppInjector(this.injector);
    }
}
