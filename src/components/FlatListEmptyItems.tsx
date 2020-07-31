import { Text, View } from 'react-native';

import React from 'react';
import { styles } from 'screens/Images.styles';

const FlatListEmptyItems: React.FC = () => {
    return (
        <View style={styles.emptyData}>
            <Text style={styles.errorText}>Вы ещё не добавили изображений</Text>
        </View>
    );
};

export default FlatListEmptyItems;
