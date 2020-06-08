import { Injectable } from '@angular/core';
import { ScullyRouteExtendsType } from '../../types/scully-route-extends';

@Injectable({
    providedIn: 'root',
})
export class ArticleItemService {
    public article: ScullyRouteExtendsType;

    constructor() {}
}
