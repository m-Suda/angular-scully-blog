import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
    declarations: [BlogComponent],
    imports: [CommonModule, BlogRoutingModule, ScullyLibModule, MaterialModule],
})
export class BlogModule {}
