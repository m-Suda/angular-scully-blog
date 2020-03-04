import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListService } from './services/article-list.service';
import { ArticleItemService } from './services/article-item.service';

const services = [ArticleListService, ArticleItemService];

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [...services],
})
export class CoreModule {}
