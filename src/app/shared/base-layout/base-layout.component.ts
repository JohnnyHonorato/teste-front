import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-base-layout',
    templateUrl: './base-layout.component.html',
    styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

    isClicked = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    private changeIcon(id) {
        const idIcon = '#slide-' + id;
        const classIcon = $(idIcon).attr('class').split(' ')[1];
        if (classIcon === 'is-expanded') {
            $(idIcon).removeClass('is-expanded');
        } else {
            $(idIcon).addClass('is-expanded');
        }
    }

    toggleMenu() {
        $('body').toggleClass('sidenav-toggled');
    }


}
