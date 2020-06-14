import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';
import { IconsModule } from '../../icons.module';

const components = [HeaderComponent];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, MatToolbarModule, IconsModule],
    exports: [...components],
})
export class HeaderModule {}
