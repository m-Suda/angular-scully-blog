import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ScullyRouteExtendsType } from '../../shared/types/scully-route-extends';
import { ArticleListService } from '../../core/services/article-list.service';
import { ArticleItemService } from '../../core/services/article-item.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    links$: Observable<ScullyRouteExtendsType[]> = this.articleList.articleList$;

    constructor(
        private articleList: ArticleListService,
        private article: ArticleItemService,
        private router: Router
    ) {}

    public openArticle(thisArticle: ScullyRouteExtendsType) {
        this.article.article = thisArticle;
        this.router.navigate([thisArticle.route]).then();
    }
}
