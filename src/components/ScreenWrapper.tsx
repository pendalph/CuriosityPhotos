import React from 'react';
import { View } from 'react-native';
import { styles } from 'components/ScreenWrapper.style';
import { useSafeArea } from 'react-native-safe-area-context';

type Indent = 'max' | 'min' | 'none';

interface Props {
    children: React.ReactNode;
    indent: Indent;
}

const ScreenWrapper: React.FC<Props> = ({ children, indent }) => {
    const INSETS = useSafeArea();
    const PADDINGS = indent === 'max' ? 25 : 15;

    return (
        <View
            style={[
                styles.root,
                {
                    paddingTop: INSETS.top,
                    paddingBottom: INSETS.bottom
                }
            ]}
        >
            <View style={{ paddingLeft: PADDINGS, paddingRight: PADDINGS }}>
                {children}
            </View>
        </View>
    );
};

export default ScreenWrapper;
