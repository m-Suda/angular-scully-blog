import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, ScullyLibModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
