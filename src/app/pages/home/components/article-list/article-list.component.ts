import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-article-list',
    template: `
        <ng-content></ng-content>
    `,
    styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
