import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../shared/material.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleListItemComponent } from './article-list/article-list-item.component';
import { ProfileComponent } from './profile/profile.component';
import { FilterArticleBottomSheetComponent } from './filter-article-bottom-sheet/filter-article-bottom-sheet.component';

@NgModule({
    declarations: [
        HomeComponent,
        ArticleListComponent,
        ArticleListItemComponent,
        ProfileComponent,
        FilterArticleBottomSheetComponent,
    ],
    imports: [CommonModule, HomeRoutingModule, MaterialModule],
})
export class HomeModule {}
