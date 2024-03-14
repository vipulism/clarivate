import { NgModule } from '@angular/core';
import { ItemListRoutingModule } from './item-list-routing.module';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {  HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ItemComponent } from './item/item.component';


@NgModule({
    imports: [
        CommonModule,
        ItemListRoutingModule,
        HttpClientModule,
        InfiniteScrollModule 
    ],
    providers:[
    ],
    declarations:[
        ListComponent,
        ItemComponent
    ]
})
export class ItemListModule { }
