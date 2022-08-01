import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen from 'components/App/Screen';
import React, { useCallback, useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';

export enum Route {
  Discover = 'route.discover',
}

const RootStack = createNativeStackNavigator();
const Navigation = () => {
  const navigation = useNavigation();

  const onFocus = useCallback((e: any) => {
    console.log(e);
  }, []);

  useEffect(() => {
    navigation.addListener('focus', onFocus);

    return () => navigation.removeListener('focus', onFocus);
  }, [navigation, onFocus]);

  return (
    <RootStack.Navigator
      screenOptions={{
        headerTintColor: '#FFF',
        headerStyle: {
          backgroundColor: '#1e272e',
        },
        headerShadowVisible: false,
      }}>
      <RootStack.Screen
        name={Route.Discover}
        component={Screen.Discover}
        options={{
          title: 'Discover',
          headerShown: !Platform.isTV,
        }}
      />
    </RootStack.Navigator>
  );
};

export default Navigation;
