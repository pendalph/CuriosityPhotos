import { RootState } from 'modules/reducer';
import {
    PHOTOS_REQUEST,
    PHOTOS_SUCCESS,
    PHOTOS_FAILURE
} from 'modules/actionTypes';
import { Dispatch } from 'redux';
import Client from 'core/services/api/client';

export const getPhotosRequest = () => {
    return {
        type: PHOTOS_REQUEST,
        pending: true
    };
};

export const getPhotosSuccess = (items: any) => {
    return {
        type: PHOTOS_SUCCESS,
        pending: false,
        items: items
    };
};

export const getPhotosFailure = (error: string) => {
    return {
        type: PHOTOS_FAILURE,
        pending: false,
        error: error
    };
};

export const getPhotos = (page: number) => {
    return async (dispatch: Dispatch<any>, getState: () => RootState) => {
        const state = getState();
        const items = state.photos.items;

        try {
            dispatch(getPhotosRequest());
            const result = await Client.getPhotos(page);

            if (result.status === 200) {
                dispatch(
                    getPhotosSuccess(
                        page === 1
                            ? result.data.photos
                            : [...items, ...result.data.photos]
                    )
                );
            } else {
                dispatch(
                    getPhotosFailure('Неведомая ошибка, обновите страницу')
                );
            }
        } catch (error) {
            dispatch(getPhotosFailure('Неведомая ошибка'));
        }
    };
};
