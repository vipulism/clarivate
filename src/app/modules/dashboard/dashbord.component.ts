import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getFavorites } from '../../store/item.reducer';
import { ITEM } from '../../models/item.model';
import { updateItem } from '../../store/item.actions';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrl:'dashboard.component.scss'
})

export class DashboardComponent implements OnInit {

    favList$: Observable<ITEM[]>;
    constructor(
        private store:Store
    ) { 
        this.favList$ = this.store.select(getFavorites);
    }

    ngOnInit() { }

    remove(item:ITEM){
        const updatedItem = {...item, isFav:false};
        this.store.dispatch(updateItem({item:updatedItem}));
    }
}