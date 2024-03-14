import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setScrollPosition } from '../../../store/item.actions';

@Component({
    selector: 'back-button',
    templateUrl: 'back-button.component.html',
    styleUrl:'back-button.component.scss'
})

export class BackButtonComponent  {
    constructor(private _location: Location,
        private store: Store) { }


    backClicked():void {
        this.store.dispatch(setScrollPosition({scrollPosition:window.scrollY}))
        this._location.back();
      }
}