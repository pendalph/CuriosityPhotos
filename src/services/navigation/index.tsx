import FavoriteImages from 'screens/FavoriteImages';
import ImageList from 'screens/ImageList';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const RootStackNavigation: React.FC = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer independent>
            <Stack.Navigator>
                <Stack.Screen
                    name="ImageList"
                    component={ImageList}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="FavoriteImages"
                    component={FavoriteImages}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStackNavigation;
