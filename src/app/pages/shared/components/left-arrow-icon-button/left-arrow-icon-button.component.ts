import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-left-arrow-icon-button',
    templateUrl: './left-arrow-icon-button.component.html',
    styleUrls: ['./left-arrow-icon-button.component.scss'],
})
export class LeftArrowIconButtonComponent implements OnInit {
    @Input() iconColor = '#4A4A4A';
    @Output() onClick = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}

    public onButtonClick() {
        this.onClick.emit();
    }
}
