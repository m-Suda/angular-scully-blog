import { Injectable } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { ScullyRouteExtendsType } from '../../shared/types/scully-route-extends';

@Injectable({
    providedIn: 'root',
})
export class ArticleListService {
    private readonly articleList = new BehaviorSubject<ScullyRouteExtendsType[]>([]);
    private readonly _articleList$ = this.articleList.asObservable();
    private _categories: string[] = [];

    constructor(private scully: ScullyRoutesService) {
        this._articleList$ = this.scully.available$.pipe(
            map(articles => this.filterOnlyArticlesToDisplay(articles)),
            tap<ScullyRouteExtendsType[]>(articles => {
                this.articleList.next(articles);
                this._categories = articles.map(({ category }) => category);
            })
        );
    }

    public get articleList$() {
        return this._articleList$;
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
