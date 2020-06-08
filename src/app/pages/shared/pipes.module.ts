import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayJoinPipe } from './pipes/array-join.pipe';

const pipes = [ArrayJoinPipe];

@NgModule({
    declarations: [...pipes],
    imports: [CommonModule],
    exports: [...pipes],
})
export class PipesModule {}
