import { Action, createAction, props } from "@ngrx/store";
import { ITEM } from "../models/item.model";

export const LoadItems = createAction('[Items] Load');
export const LoadItemsSuccess = createAction(
    '[Items] Load Success',
    props<{items:ITEM[]}>()
    );
export const LoadItemsFail = createAction(
    '[Items] Load Fail',
    props<{ error: string }>()
    );



export const updateItem = createAction(
    '[Item] Update Item',
    props<{item:ITEM, scrollPosition?:number}>()
    );


export const addItems = createAction(
    '[Items] add Item',
    props<{items:ITEM[], scrollPosition?:number}>()
)

export const setScrollPosition = createAction(
    '[scrollPosition] set scroll position',
    props<{scrollPosition:number}>()
)