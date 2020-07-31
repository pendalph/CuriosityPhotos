import {
    PHOTOS_REQUEST,
    PHOTOS_SUCCESS,
    PHOTOS_FAILURE,
    SELECTED_PHOTOS_SUCCESS
} from 'modules/actionTypes';
import { AnyAction } from 'redux';
import { Photos } from 'types/index';

export type State = {
    pending: boolean;
    items: Photos[];
    selectedItems: Photos[];
    error: string | null;
};

export const initialState: State = {
    pending: false,
    items: [],
    selectedItems: [],
    error: null
};

const photos = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case PHOTOS_REQUEST:
            return {
                ...state,
                pending: action.pending
            };

        case PHOTOS_SUCCESS:
            return {
                ...state,
                pending: action.pending,
                items: action.items
            };

        case PHOTOS_FAILURE:
            return {
                ...state,
                pending: action.pending,
                error: action.error
            };

        case SELECTED_PHOTOS_SUCCESS:
            return {
                ...state,
                selectedItems: action.items
            };

        default:
            return state;
    }
};

export default photos;
