import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen from 'App/Screen';
import React from 'react';
import { StatusBar } from 'react-native';

export enum Route {
  Home = 'route.home',
}

const RootStack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RootStack.Navigator>
        <RootStack.Screen
          name={Route.Home}
          component={Screen.Home}
          options={{
            title: 'Home',
          }}
        />
      </RootStack.Navigator>
    </>
  );
};

export default Navigation;
