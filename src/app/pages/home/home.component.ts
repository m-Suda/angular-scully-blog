import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ScullyRouteExtendsType } from '../../types/scully-route-extends';
import { ArticleListService } from '../../core/services/article-list.service';
import { ArticleItemService } from '../../core/services/article-item.service';
import { FilterArticleBottomSheetComponent } from './components/filter-article-bottom-sheet/filter-article-bottom-sheet.component';

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
        private router: Router,
        private filterArticleBottomSheet: MatBottomSheet
    ) {}

    public openArticle(thisArticle: ScullyRouteExtendsType) {
        this.article.article = thisArticle;
        this.router.navigate([thisArticle.route]).then();
    }

    public openSearchArticle() {
        const searchArticleBottomSheetRef = this.filterArticleBottomSheet.open(
            FilterArticleBottomSheetComponent
        );

        searchArticleBottomSheetRef.afterDismissed().subscribe(selectedCategories => {
            if (!Array.isArray(selectedCategories)) return;
            this.articleList.filter(selectedCategories);
        });
    }
}
