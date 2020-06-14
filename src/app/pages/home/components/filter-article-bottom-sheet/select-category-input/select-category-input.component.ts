import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-select-category-input',
    templateUrl: './select-category-input.component.html',
    styleUrls: ['./select-category-input.component.scss'],
})
export class SelectCategoryInputComponent implements OnInit {
    @Input() selectedCategories: string[];

    @Output() onRemoveCategory = new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {}

    public removeCategory(category: string) {
        this.onRemoveCategory.emit(category);
    }
}
