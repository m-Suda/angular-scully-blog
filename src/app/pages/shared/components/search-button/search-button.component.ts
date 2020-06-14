import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-search-button',
    templateUrl: './search-button.component.html',
    styleUrls: ['./search-button.component.scss'],
})
export class SearchButtonComponent implements OnInit {
    @Output() onClick = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}

    public onButtonClick() {
        this.onClick.emit();
    }
}
