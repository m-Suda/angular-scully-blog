import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-select-category-list',
    templateUrl: './select-category-list.component.html',
    styleUrls: ['./select-category-list.component.scss'],
})
export class SelectCategoryListComponent implements OnInit {
    @Input() categories: string[];
    @Output() onSelectCategory = new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {}

    public selectCategory(category: string) {
        this.onSelectCategory.emit(category);
    }
}
