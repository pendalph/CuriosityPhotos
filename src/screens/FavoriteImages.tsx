import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState
} from 'react-navigation';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FlatListEmptyItems from 'components/FlatListEmptyItems';
import Image from 'components/Image';
import RNShake from 'react-native-shake';
import { RootState } from 'modules/reducer';
import ScreenWrapper from 'components/ScreenWrapper';
import { VIEWABILITY_CONFIG } from 'config/viewabilityConfig';
import { styles } from 'screens/Images.styles';
import { takePhotos } from 'modules/photos/actions/takePhotos';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const FavoriteImages: React.FC<Props> = ({ navigation }) => {
    const dispatch = useDispatch();

    const { selectedItems } = useSelector((state: RootState) => {
        return state.photos;
    });

    useEffect(() => {
        RNShake.addEventListener('ShakeEvent', () => {
            navigation.navigate('ImageList');
        });
        return () => RNShake.removeEventListener('ShakeEvent');
    }, [navigation]);

    const deleteImage = (id: number) => {
        const newArray = selectedItems.filter((item) => item.id !== id);
        dispatch(takePhotos([...newArray]));
    };

    return (
        <ScreenWrapper indent="none">
            <View style={styles.root}>
                <FlatList
                    data={selectedItems}
                    ListEmptyComponent={FlatListEmptyItems}
                    maxToRenderPerBatch={10}
                    horizontal={false}
                    renderItem={({ item }) => (
                        <View style={styles.imageWrapper}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => deleteImage(item.id)}
                                style={styles.saveImage}
                            >
                                <Text style={styles.buttonText}>Удалить</Text>
                            </TouchableOpacity>
                            <Image src={item.img_src} />
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    onEndReachedThreshold={0.8}
                    removeClippedSubviews={false}
                    viewabilityConfig={VIEWABILITY_CONFIG}
                />
            </View>
        </ScreenWrapper>
    );
};

export default FavoriteImages;
