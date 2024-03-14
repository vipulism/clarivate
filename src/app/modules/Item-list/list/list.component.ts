import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addItems, updateItem } from '../../../store/item.actions';
import { getItems, getScrollPosition } from '../../../store/item.reducer';
import { ITEM } from '../../../models/item.model';
import { Observable, mergeMap, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';




@Component({
    selector: 'item-list',
    templateUrl: 'list.component.html',
    styleUrl:'list.component.scss'
})

export class ListComponent implements OnInit {

    list!:Observable<ITEM[]>;
    throttle = 500;
    scrollDistance = 2;
    isLoading=false;

    toggleLoading = ()=>this.isLoading=!this.isLoading;

    constructor(
        private store: Store,
        private http: HttpClient
        ) {
           
     }

    ngOnInit() {
        this.http.get<ITEM[]>(`https://jsonplaceholder.typicode.com/albums/1/photos?_page=${1}&amp;_limit=10&quot`)
            .subscribe(items => {
                this.store.dispatch(addItems({items}));
                this.list = this.store.select(getItems);
            })
     }
 
 
    appendData(){
        this.toggleLoading();
        this.list.pipe(
            take(1),
            mergeMap(items => {
               const pageNum = items.length / 10;
               return  this.http.get<ITEM[]>(`https://jsonplaceholder.typicode.com/albums/1/photos?_page=${pageNum+1}&amp;_limit=10&quot`)
            })
        ).subscribe({
            next:(items:ITEM[]) => {
                this.store.dispatch(addItems({items }))
            },
            complete:() => this.toggleLoading()
        })
    }

    onScroll(ev:any){
        console.log(ev);
        this.appendData();
    }
}