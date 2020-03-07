import { Component, ViewEncapsulation } from '@angular/core';
import { ArticleItemService } from '../../core/services/article-item.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    preserveWhitespaces: true,
    encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent {
    public article = this.articleItem.article;

    constructor(private articleItem: ArticleItemService) {}
}
