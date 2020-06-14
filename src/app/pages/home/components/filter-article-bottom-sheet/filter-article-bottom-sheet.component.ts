import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ArticleListService } from '../../../../core/services/article-list.service';

@Component({
    selector: 'app-search-article-bottom-sheet',
    templateUrl: './filter-article-bottom-sheet.component.html',
    styleUrls: ['./filter-article-bottom-sheet.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class FilterArticleBottomSheetComponent implements OnInit {
    public categories: string[];
    public selectedCategories: string[];

    constructor(
        private _bottomSheetRef: MatBottomSheetRef<FilterArticleBottomSheetComponent>,
        private articleList: ArticleListService
    ) {}

    ngOnInit(): void {
        this.categories = this.articleList.categories;
        this.selectedCategories = [];
    }

    public addCategoryToFilter(selectedCategory: string) {
        const newSelectedCategories = [...this.selectedCategories, selectedCategory];
        this.selectedCategories = [...new Set(newSelectedCategories)];
    }

    public removeCategoryToFilter(selectedCategory) {
        this.selectedCategories = this.selectedCategories.filter(
            category => category !== selectedCategory
        );
    }

    public onSearch() {
        this._bottomSheetRef.dismiss(this.selectedCategories);
    }

    public onCancel() {
        this._bottomSheetRef.dismiss();
    }
}
