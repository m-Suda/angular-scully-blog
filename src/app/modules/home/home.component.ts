import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { ScullyRouteExtendsType } from '../../shared/types/scully-route-extends';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    links$: Observable<ScullyRouteExtendsType[]> = this.scully.available$;

    constructor(private scully: ScullyRoutesService) {}

    ngOnInit(): void {
        // debug current pages
        this.links$.subscribe(links => {
            console.log(links);
        });
    }
}
