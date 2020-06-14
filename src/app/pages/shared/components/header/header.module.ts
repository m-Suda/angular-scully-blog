import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';

const components = [HeaderComponent];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, MatToolbarModule],
    exports: [...components],
})
export class HeaderModule {}
