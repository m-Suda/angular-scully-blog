import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LeftArrowButtonComponent } from './left-arrow-button.component';

@NgModule({
    declarations: [LeftArrowButtonComponent],
    imports: [CommonModule, MatIconModule, MatButtonModule],
    exports: [LeftArrowButtonComponent],
})
export class LeftArrowButtonModule {}
