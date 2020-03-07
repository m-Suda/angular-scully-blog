import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const materialModules = [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
];

@NgModule({
    imports: [...materialModules],
    exports: [...materialModules],
})
export class MaterialModule {}
