import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AppInjector } from 'src/app/core/service/app.injector';
import { CrudService } from 'src/app/core/service/crud.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  protected service: CrudService = AppInjector.get(CrudService);

  items;

  constructor(
      private route: Router,
      public notifier: NotifierService
  ) { 
  }

  ngOnInit(): void {
    this.service.get('products').subscribe(result => {
      this.items = result;
    });
  }

  toCreate() {
    this.route.navigate(['/create']);
  }

  delete(id) {
    this.service.delete('products/' + id).subscribe(result => {
      this.notifier.notify("success", result['message']);
      this.ngOnInit();
    });
  }

  edit(id) {
    this.route.navigate(['edit/' + id]);
  }

}
