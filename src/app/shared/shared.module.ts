import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { BackButtonComponent } from './components/back-button/back-button.component';


@NgModule({
    imports: [
        RouterModule,
        RouterLink
    ],
    declarations: [
        HeaderComponent,
        LayoutComponent,
        BackButtonComponent
    ],
})
export class SharedModule { }
