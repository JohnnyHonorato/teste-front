import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { BaseComponent } from '../../../core/interface/base-component';
import { CrudService } from 'src/app/core/service/crud.service';
import { AppInjector } from 'src/app/core/service/app.injector';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent extends BaseComponent implements OnInit {

    public form: FormGroup;

    protected service: CrudService = AppInjector.get(CrudService);

    id

    constructor(
        private formBuilder: FormBuilder,
        public notifier: NotifierService,
        private route: Router,
        private activatedRoute: ActivatedRoute
    ) {
        super();
    }

    ngOnInit(): void {
        this.form = this.getForm();
        this.activatedRoute.params.subscribe(params => this.id = params['id']);
        if (this.id) {
            this.service.get('products/' + this.id).subscribe(result => {
                this.postGetItem(result);
            });
        }
        super.ngOnInit();
    }

    getForm() {
        return this.formBuilder.group({
            id: this.formBuilder.control(undefined, []),
            title: this.formBuilder.control(undefined, [Validators.required, Validators.minLength(3)]),
            price: this.formBuilder.control(undefined, [Validators.required])
        });
    }

    onSubmit() {
        if(!this.id){
            this.service.post('products', this.form.value).subscribe(
                result => {
                    this.notifier.notify("success", result['message']);
                    this.back();
                },
                error => {
                    this.notifier.notify("error", "Falha ao cadastrar");
                })
        } else {
            this.service.put('products/' + this.id, this.form.value).subscribe(
                result => {
                    this.notifier.notify("success", result['message']);
                    this.back();
                },
                error => {
                    this.notifier.notify("error", "Falha ao cadastrar");
                })
        }
        
    }

    back() {
        this.route.navigate(['/']);
    }


    protected postGetItem(item) {
        this.form.get('id').setValue(item._id);
        this.form.get('title').setValue(item.title);
        this.form.get('price').setValue(item.price);
    }

}
