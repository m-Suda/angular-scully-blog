import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-search-button',
    templateUrl: './search-button.component.html',
    styleUrls: ['./search-button.component.scss'],
})
export class SearchButtonComponent implements OnInit {
    @Input() iconColor = '#4A4A4A';
    @Output() onClick = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}

    public onButtonClick() {
        this.onClick.emit();
    }
}
