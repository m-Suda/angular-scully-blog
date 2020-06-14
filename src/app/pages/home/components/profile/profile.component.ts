import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    public profileIcon = '/assets/profile.png';
    public name = 'masaks';
    public snsIcons = [
        {
            imageUrl: '/assets/Twitter.png',
            siteUrl: '',
        },
        {
            imageUrl: '/assets/GitHub.png',
            siteUrl: '',
        },
        {
            imageUrl: '/assets/Qiita.png',
            siteUrl: '',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
