import { Dimensions, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import React, { useState } from 'react';
import ImagePreloader from './ImagePreloader';

interface Props {
    src: string;
}

const WIDTH = Dimensions.get('window').width;

const Image: React.FC<Props> = ({ src }) => {
    const [isFetched, setIsFetched] = useState(false);
    const [isError, setIsError] = useState(false);

    const onLoad = () => {
        setIsFetched(true);
        setIsError(false);
    };

    const onError = () => {
        setIsError(true);
        setIsFetched(false);
    };

    return (
        <FastImage
            onLoad={onLoad}
            onError={onError}
            style={{ width: WIDTH - 45, height: 400, borderRadius: 12 }}
            source={{
                uri: src,
                priority: FastImage.priority.normal
            }}
            resizeMode={FastImage.resizeMode.cover}
        >
            {!isFetched && !isError && (
                <ImagePreloader style={styles.preloader} />
            )}
        </FastImage>
    );
};

const styles = StyleSheet.create({
    preloader: { width: '100%', height: '100%' }
});

export default Image;
