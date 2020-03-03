import { Component, Input, OnInit } from '@angular/core';
import { ScullyRouteExtendsType } from '../../../shared/types/scully-route-extends';

@Component({
    selector: 'app-article-list-item',
    templateUrl: './article-list-item.component.html',
    styleUrls: ['./article-list-item.component.scss'],
})
export class ArticleListItemComponent implements OnInit {
    @Input() article: ScullyRouteExtendsType;

    constructor() {}

    ngOnInit(): void {}
}
