import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ScullyRouteExtendsType } from '../../shared/types/scully-route-extends';
import { ArticleListService } from '../../core/services/article-list.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    links$: Observable<ScullyRouteExtendsType[]> = this.articles.articleList$;

    constructor(private articles: ArticleListService) {}
}
