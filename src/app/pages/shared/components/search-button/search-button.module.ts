import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SearchButtonComponent } from './search-button.component';

@NgModule({
    declarations: [SearchButtonComponent],
    exports: [SearchButtonComponent],
    imports: [CommonModule, MatButtonModule, MatIconModule],
})
export class SearchButtonModule {}
