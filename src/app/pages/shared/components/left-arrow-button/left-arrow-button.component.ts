import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-left-arrow-button',
    templateUrl: './left-arrow-button.component.html',
    styleUrls: ['./left-arrow-button.component.scss'],
})
export class LeftArrowButtonComponent implements OnInit {
    @Input() iconColor = '#4A4A4A';
    @Output() onClick = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}

    public onButtonClick() {
        this.onClick.emit();
    }
}
