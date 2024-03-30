import {MarkTypes} from "../consts/MarkTypes.js";
import {MarkTypesRu} from "../consts/MarkTypesRu.js";

export const getMarkType = (markType) =>{
    switch (markType){
        case MarkTypes.Mid():
            return MarkTypesRu.Mid()
        case MarkTypes.Final():
            return MarkTypesRu.Final()
    }
}