import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { ItemReducer } from './store/item.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    SharedModule,
    DashboardModule,
    StoreModule.forRoot({
      items:ItemReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
