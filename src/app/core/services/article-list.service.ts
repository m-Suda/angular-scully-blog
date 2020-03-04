import { Injectable } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ScullyRouteExtendsType } from '../../shared/types/scully-route-extends';

@Injectable({
    providedIn: 'root',
})
export class ArticleListService {
    private readonly _links$: Observable<ScullyRouteExtendsType[]>;
    private _routes: string[] = [];
    private _categories: string[] = [];

    constructor(private scully: ScullyRoutesService) {
        this._links$ = this.scully.available$.pipe(
            map(articles => this.filterOnlyArticlesToDisplay(articles)),
            tap<ScullyRouteExtendsType[]>(articles => {
                this._routes = articles.map(({ route }) => route);
                this._categories = articles.map(({ category }) => category);
            })
        );
    }

    public get links$() {
        return this._links$;
    }

    public get routes() {
        return this._routes;
    }

    public get categories() {
        return this._categories;
    }

    /**
     * 表示する記事のみをフィルタリングする。
     * 0番目は空データのため。
     * @param articles
     */
    private filterOnlyArticlesToDisplay(
        articles: ScullyRouteExtendsType[]
    ): ScullyRouteExtendsType[] {
        return articles.slice(1, articles.length);
    }
}
