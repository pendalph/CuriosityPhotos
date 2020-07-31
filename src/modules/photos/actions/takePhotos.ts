import { Dispatch } from 'redux';
import { SELECTED_PHOTOS_SUCCESS } from 'modules/actionTypes';

export const takePhotosSuccess = (items: any) => {
    return {
        type: SELECTED_PHOTOS_SUCCESS,
        pending: false,
        items: items
    };
};

export const takePhotos = (item: any) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(takePhotosSuccess(item));
    };
};
