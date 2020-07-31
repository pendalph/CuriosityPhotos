import { ActivityIndicator, View } from 'react-native';

import React from 'react';

const FlatListFooter: React.FC = () => {
    return (
        <View
            style={{
                position: 'relative',
                width: '100%',
                height: 100,
                paddingVertical: 20,
                marginTop: 10,
                marginBottom: 10
            }}
        >
            <ActivityIndicator animating size="large" />
        </View>
    );
};

export default FlatListFooter;
