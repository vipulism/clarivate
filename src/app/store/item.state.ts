import { ITEM } from "../models/item.model";

export interface ItemStateModel {
    readonly items:ITEM[];
    scrollPosition:number;
}

