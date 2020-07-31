import photos, { State as PhotosState } from 'modules/photos/reducer';
import { combineReducers } from 'redux';

export type RootState = {
    photos: PhotosState;
};

export default combineReducers<RootState>({
    photos
});
