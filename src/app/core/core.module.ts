import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';

import {TranslateModule} from '@ngx-translate/core';
import { CrudService } from './service/crud.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  declarations: [],
  exports: [],
  providers: [CrudService]
})
export class CoreModule { }
