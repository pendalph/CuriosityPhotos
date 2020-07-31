import React, { useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';

const loopAV = new Animated.Value(0);
const opacityAV = loopAV.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.03, 0.015, 0.03]
});
let animationRequestCount = 0;

const startAnimation = () => {
    animationRequestCount += 1;
    if (animationRequestCount > 1) {
        return;
    }

    Animated.loop(
        Animated.timing(loopAV, {
            toValue: 1,
            useNativeDriver: true,
            duration: 1000
        })
    ).start();
};

const endAnimation = () => {
    animationRequestCount -= 1;
    if (animationRequestCount === 0) {
        loopAV.stopAnimation();
    }
};

const animationStyle = { opacity: opacityAV };

const ImagePreloader = ({ style, ...props }: any) => {
    useEffect(() => {
        startAnimation();
        return () => endAnimation();
    });

    return (
        <Animated.View
            {...props}
            style={[style, stylesheet.base, animationStyle]}
        />
    );
};

const stylesheet = StyleSheet.create({
    base: { backgroundColor: 'white' }
});

export default ImagePreloader;
