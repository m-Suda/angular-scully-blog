import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-sns-links',
    templateUrl: './sns-links.component.html',
    styleUrls: ['./sns-links.component.scss'],
})
export class SnsLinksComponent implements OnInit {
    @Input() snsIcons: { imageUrl: string; siteUrl: string }[];

    constructor() {}

    ngOnInit(): void {}
}
