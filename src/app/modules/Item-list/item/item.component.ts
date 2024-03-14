import { Component, Input, OnInit } from '@angular/core';
import { ITEM } from '../../../models/item.model';
import { Store } from '@ngrx/store';
import { updateItem } from '../../../store/item.actions';

@Component({
    selector: 'item',
    templateUrl: 'item.component.html',
    styleUrl:'item.component.scss'
})

export class ItemComponent {

    @Input({ required: true }) item!:ITEM;

    constructor(private store: Store) { }

    toggleFav(item:ITEM){
        const updatedItem = {...item}
        updatedItem.isFav = updatedItem.isFav ? !updatedItem.isFav : true;
        this.store.dispatch(updateItem({item:updatedItem}));
    }
}