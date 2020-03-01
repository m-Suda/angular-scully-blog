import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScullyRouteExtendsType } from '../../shared/types/scully-route-extends';
import { ArticlesService } from '../../core/services/articles.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    links$: Observable<ScullyRouteExtendsType[]> = this.articles.links$;

    constructor(private articles: ArticlesService) {}

    ngOnInit(): void {
        this.links$.subscribe(links => {
            console.log(links);
        });
    }
}
