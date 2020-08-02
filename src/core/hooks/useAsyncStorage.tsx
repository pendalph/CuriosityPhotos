import AsyncStorage from '@react-native-community/async-storage';

export const useAsyncStorage = () => {
    const setInStorage = async (store: string, value: string[]) => {
        await AsyncStorage.setItem(store, JSON.stringify(value));
    };

    const getValuesFromStorage = async (store: string) => {
        const result = await AsyncStorage.getItem(store);
        if (result !== null) {
            return JSON.parse(result);
        }
    };

    return {
        setInStorage,
        getValuesFromStorage
    };
};
