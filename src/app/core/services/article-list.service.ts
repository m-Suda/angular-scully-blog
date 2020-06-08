import { Injectable } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { ScullyRouteExtendsType } from '../../types/scully-route-extends';

@Injectable({
    providedIn: 'root',
})
export class ArticleListService {
    private readonly articleList = new BehaviorSubject<ScullyRouteExtendsType[]>([]);
    private readonly _articleList$ = this.articleList.asObservable();
    private _allArticleList: ScullyRouteExtendsType[] = [];
    public categories: string[] = [];

    constructor(private scully: ScullyRoutesService) {
        this.scully.available$
            .pipe(
                map(articles => this.filterOnlyArticlesToDisplay(articles)),
                tap<ScullyRouteExtendsType[]>(articles => {
                    this._allArticleList = articles;
                    this.articleList.next(articles);
                    // @ts-ignore flat()で型エラーが起きる
                    const categories = articles.map(({ category }) => category).flat();
                    this.categories = [...new Set<string>(categories)];
                })
            )
            .toPromise()
            .then();
    }

    public get articleList$() {
        return this._articleList$;
    }

    public filter(selectedCategory: string[]) {
        if (!selectedCategory.length) {
            this.articleList.next(this._allArticleList);
            return;
        }

        const filteredArticles = this._allArticleList.filter(({ category }) => {
            return category.filter(c => selectedCategory.includes(c)).length;
        });
        this.articleList.next(filteredArticles);
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
