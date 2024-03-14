import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { ItemStateModel } from "./item.state";
import * as ItemActions from './item.actions';

const initState:ItemStateModel = {
    items:[],
    scrollPosition:0
}

const getItemFeatureState = createFeatureSelector<ItemStateModel>('items');

export const getItems = createSelector(
    getItemFeatureState,
    state => state.items
);

export const getScrollPosition = createSelector(
    getItemFeatureState,
    state => state.scrollPosition
)

export const getFavorites = createSelector(
    getItemFeatureState,
    state => state.items.filter(itm => itm.isFav)
);

export const ItemReducer = createReducer<ItemStateModel>(
    initState,
    on(ItemActions.updateItem, (state, action) => {
        const updateItems = state.items.map(itm => itm.id === action.item.id ? action.item : itm)
        return {
            items:updateItems || state.items,
            scrollPosition: action.scrollPosition || state.scrollPosition
        }
    }),
    on(ItemActions.addItems, (state, action) => {
        // ignore if item already there
        const uniqItems = [...new Map([...action.items, ...state.items].map(itm => [itm.id, itm] )).values()].sort(function(a, b) { 
            return a.id - b.id;
          })
        return {
            items:uniqItems || state.items,
            scrollPosition: action.scrollPosition || state.scrollPosition 
        }
    }),
    on(ItemActions.setScrollPosition, (state, action) => {
        return {
            items:state.items,
            scrollPosition:action.scrollPosition
        }
    })
)