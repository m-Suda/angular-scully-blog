import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../../shared/material.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleListItemComponent } from './article-list/article-list-item.component';

@NgModule({
    declarations: [HomeComponent, ArticleListComponent, ArticleListItemComponent],
    imports: [CommonModule, HomeRoutingModule, MaterialModule],
})
export class HomeModule {}
