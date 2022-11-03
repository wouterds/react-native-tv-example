import { NavigationState } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen from 'components/App/Screen';
import React from 'react';
import { Platform } from 'react-native';
import FocusService from 'services/focus';

export enum Route {
  Discover = 'route.discover',
  Movie = 'route.movie',
  Show = 'route.show',
}

const RootStack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerTintColor: '#38eabe',
        headerTitleStyle: {
          color: '#FFF',
        },
        headerStyle: {
          backgroundColor: '#0D0F13',
        },
        headerShadowVisible: false,
      }}
      screenListeners={() => ({
        state: (e: any) => {
          const { index, routes } = e.data.state as NavigationState;
          const route = routes[index];

          if (FocusService.instance) {
            FocusService.instance.activeRoute = route.name;
          }
        },
      })}>
      <RootStack.Screen
        name={Route.Discover}
        component={Screen.Discover}
        options={{
          title: 'Discover',
          headerShown: !Platform.isTV,
        }}
      />
      <RootStack.Screen
        name={Route.Movie}
        component={Screen.Movie}
        options={({ route }) => ({
          title: (route.params as any)?.title || 'Movie',
          headerShown: !Platform.isTV,
        })}
      />
      <RootStack.Screen
        name={Route.Show}
        component={Screen.Show}
        options={({ route }) => ({
          title: (route.params as any)?.title || 'Show',
          headerShown: !Platform.isTV,
        })}
      />
    </RootStack.Navigator>
  );
};

export default Navigation;
