import {
    Alert,
    FlatList,
    Text,
    TouchableOpacity,
    View,
    RefreshControl
} from 'react-native';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState
} from 'react-navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Image from 'components/Image';
import ListItemFooter from 'components/FlatListFooter';
import { Photos } from 'types/index';
import RNShake from 'react-native-shake';
import { RootState } from 'modules/reducer';
import ScreenWrapper from 'components/ScreenWrapper';
import { VIEWABILITY_CONFIG } from 'core/config/viewabilityConfig';
import { useAsyncStorage } from 'core/hooks/useAsyncStorage';
import { getPhotos } from 'modules/photos/actions/getPhotos';
import { styles } from 'screens/Images.styles';
import { takePhotos } from 'modules/photos/actions/takePhotos';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const DEFAULT_PAGE = 1;

const ImageList: React.FC<Props> = ({ navigation }) => {
    const dispatch = useDispatch();
    const { getValuesFromStorage } = useAsyncStorage();

    const { pending, items, selectedItems } = useSelector(
        (state: RootState) => {
            return state.photos;
        }
    );

    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        if (!pending) {
            dispatch(getPhotos(page));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const checkAsyncStorage = async (): Promise<void> => {
        const storageItems = await getValuesFromStorage('favoritesImage');
        if (storageItems.length !== 0) {
            dispatch(takePhotos(storageItems));
        }
    };

    useEffect(() => {
        if (selectedItems.length === 0) {
            checkAsyncStorage();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        RNShake.addEventListener('ShakeEvent', () => {
            navigation.navigate('FavoriteImages');
        });
        return () => RNShake.removeEventListener('ShakeEvent');
    }, [navigation]);

    const saveImage = (item: Photos): void => {
        const filteredArray = selectedItems.filter(
            (value) => value.id === item.id
        );

        if (selectedItems.length === 0) {
            dispatch(takePhotos([item]));
            Alert.alert('Успешно', 'Картинка добавлена', [{ text: 'OK' }], {
                cancelable: false
            });
        } else if (filteredArray.length === 0) {
            dispatch(takePhotos([...selectedItems, item]));
            Alert.alert('Успешно', 'Картинка добавлена', [{ text: 'OK' }], {
                cancelable: false
            });
        } else {
            Alert.alert('Ошибка', 'Картинка уже добавлена', [{ text: 'OK' }], {
                cancelable: false
            });
        }
    };

    const handleLoadMore = (): void => {
        const nextPage = page + 1;
        if (nextPage > page) {
            dispatch(getPhotos(nextPage));
            setPage(nextPage);
        }
    };

    const handleRefresh = (): void => {
        dispatch(getPhotos(DEFAULT_PAGE));
        setPage(DEFAULT_PAGE);
    };

    return (
        <ScreenWrapper indent="none">
            <View style={styles.root}>
                <FlatList
                    data={items}
                    maxToRenderPerBatch={10}
                    horizontal={false}
                    renderItem={({ item }) => (
                        <View style={styles.imageWrapper}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => saveImage(item)}
                                style={styles.saveImage}
                            >
                                <Text style={styles.buttonText}>
                                    В избранное
                                </Text>
                            </TouchableOpacity>
                            <Image src={item.img_src} />
                        </View>
                    )}
                    ListFooterComponent={ListItemFooter}
                    refreshing={pending}
                    refreshControl={
                        <RefreshControl
                            refreshing={pending}
                            onRefresh={handleRefresh}
                        />
                    }
                    keyExtractor={(item) => item.id.toString()}
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={0.8}
                    removeClippedSubviews={false}
                    viewabilityConfig={VIEWABILITY_CONFIG}
                />
            </View>
        </ScreenWrapper>
    );
};

export default ImageList;
