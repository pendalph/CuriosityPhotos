import 'react-native-gesture-handler';

import * as React from 'react';

import { Provider } from 'react-redux';
import RootStackNavigation from 'core/services/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import configureStore from 'modules/configureStore';

const Root: React.FC = () => {
    const store = configureStore();

    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <RootStackNavigation />
            </SafeAreaProvider>
        </Provider>
    );
};

export default Root;
