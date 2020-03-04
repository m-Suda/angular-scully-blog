import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListService } from './services/article-list.service';

const services = [ArticleListService];

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [...services],
})
export class CoreModule {}
