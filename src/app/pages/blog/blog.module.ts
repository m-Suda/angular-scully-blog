import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { MaterialModule } from '../shared/material.module';
import { PipesModule } from '../shared/pipes.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { SearchButtonModule } from '../shared/components/search-button/search-button.module';
import { LeftArrowButtonModule } from '../shared/components/left-arrow-button/left-arrow-button.module';
import { LeftArrowIconButtonModule } from '../shared/components/left-arrow-icon-button/left-arrow-icon-button.module';

@NgModule({
    declarations: [BlogComponent],
    imports: [
        CommonModule,
        BlogRoutingModule,
        ScullyLibModule,
        MaterialModule,
        PipesModule,
        HeaderModule,
        SearchButtonModule,
        LeftArrowButtonModule,
        LeftArrowIconButtonModule,
    ],
})
export class BlogModule {}
