import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchButtonComponent } from './search-button.component';
import { MatButtonModule } from "@angular/material/button";
import { IconsModule } from "../../icons.module";



@NgModule({
    declarations: [ SearchButtonComponent ],
    exports: [
        SearchButtonComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        IconsModule
    ]
})
export class SearchButtonModule { }
