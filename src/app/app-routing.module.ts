import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BaseLayoutComponent} from './shared/base-layout/base-layout.component';

const routes: Routes = [
    {
        path: '', component: BaseLayoutComponent, children: [
            {
                path: '',
                loadChildren: 'src/app/components/product/product.module#ProductModule',
            }
        ]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
