import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ScullyRouteExtendsType } from '../../shared/types/scully-route-extends';
import { ArticlesService } from '../../core/services/articles.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    links$: Observable<ScullyRouteExtendsType[]> = this.articles.links$;

    constructor(private articles: ArticlesService) {}
}
