import { StyleSheet } from 'react-native';
import { colors } from 'theme/colors';

export const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%'
    },
    errorText: {
        color: colors.dark.RED,
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center'
    },
    imageWrapper: {
        padding: 5
    },
    saveImage: {
        position: 'absolute',
        zIndex: 1,
        bottom: 15,
        right: 20,
        width: 150,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: colors.dark.PURPLE
    },
    buttonText: {
        color: colors.dark.WHITE,
        fontSize: 16,
        fontWeight: '700'
    },
    emptyData: {
        paddingTop: 20
    }
});
