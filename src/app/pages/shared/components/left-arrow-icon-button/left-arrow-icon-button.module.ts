import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftArrowIconButtonComponent } from './left-arrow-icon-button.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    declarations: [LeftArrowIconButtonComponent],
    exports: [LeftArrowIconButtonComponent],
    imports: [ CommonModule, MatButtonModule, MatIconModule ],
})
export class LeftArrowIconButtonModule {}
