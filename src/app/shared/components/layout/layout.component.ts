import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { delay, delayWhen, filter,  interval,  of,  switchMap } from 'rxjs';
import { getScrollPosition } from '../../../store/item.reducer';
import { addItems, setScrollPosition } from '../../../store/item.actions';

@Component({
    selector: 'layout',
    templateUrl: './layout.component.html'
})

export class LayoutComponent implements OnInit {
    constructor(
        private router: Router,
        private store: Store
    ) { }

    ngOnInit() {
        this.router.events
        .pipe(
            filter(event => event instanceof NavigationEnd || event instanceof NavigationStart),
            delayWhen(event => event instanceof NavigationEnd  ? interval(300) : interval(0)),
        ).subscribe(event => {
            if(event instanceof NavigationEnd &&  event.url === '/list'){
               this.store.select(getScrollPosition).subscribe(position => {
                   this.scrollToPosition(position);
               })
            }else if(event instanceof NavigationStart && event.url === '/list'){
            //    this.store.dispatch(setScrollPosition({scrollPosition:window.scrollY}))
            }
        });

     }


     scrollToPosition(val:number){
        window.scroll({
            top:val,
            behavior:'instant'
        })
     }
}