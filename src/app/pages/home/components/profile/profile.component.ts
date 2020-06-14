import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    public name = 'Suda';
    public selfIntroduction = 'JavaScript / TypeScript / Node.js/ Angular';

    constructor() {}

    ngOnInit(): void {}
}
