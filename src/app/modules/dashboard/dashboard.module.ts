import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashbord.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    declarations: [DashboardComponent],
})
export class DashboardModule { }
