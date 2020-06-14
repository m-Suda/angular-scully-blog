import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../shared/material.module';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleListItemComponent } from './components/article-list/article-list-item.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FilterArticleBottomSheetComponent } from './components/filter-article-bottom-sheet/filter-article-bottom-sheet.component';
import { HeaderModule } from '../shared/components/header/header.module';
import { SearchButtonModule } from '../shared/components/search-button/search-button.module';
import { SnsLinksComponent } from './components/profile/sns-links/sns-links.component';
import { ProfileIconComponent } from './components/profile/profile-icon/profile-icon.component';
import { ProfileNameComponent } from './components/profile/profile-name/profile-name.component';

@NgModule({
    declarations: [
        HomeComponent,
        ArticleListComponent,
        ArticleListItemComponent,
        ProfileComponent,
        FilterArticleBottomSheetComponent,
        SnsLinksComponent,
        ProfileIconComponent,
        ProfileNameComponent,
    ],
    imports: [CommonModule, HomeRoutingModule, MaterialModule, HeaderModule, SearchButtonModule],
})
export class HomeModule {}