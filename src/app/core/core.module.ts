import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesService } from './services/articles.service';

const services = [ArticlesService];

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [...services],
})
export class CoreModule {}
