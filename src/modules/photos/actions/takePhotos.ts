import { Dispatch } from 'redux';
import { SELECTED_PHOTOS_SUCCESS } from 'modules/actionTypes';
import { useAsyncStorage } from 'core/hooks/useAsyncStorage';

export const takePhotosSuccess = (items: any) => {
    return {
        type: SELECTED_PHOTOS_SUCCESS,
        pending: false,
        items: items
    };
};

export const takePhotos = (item: any) => {
    return (dispatch: Dispatch<any>) => {
        const { setInStorage } = useAsyncStorage();

        dispatch(takePhotosSuccess(item));
        setInStorage('favoritesImage', item);
    };
};
