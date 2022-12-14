import {
  createStackNavigator,
  StackCardStyleInterpolator,
} from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';
import Screen from 'screens';
import FocusService from 'services/focus';

import { Route } from './routes';

const fadeAnimation: StackCardStyleInterpolator = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const RootStack = createStackNavigator();
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
          const { index, routes } = e.data.state;
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
          cardStyleInterpolator: fadeAnimation,
        }}
      />
      <RootStack.Screen
        name={Route.Movies}
        component={Screen.Movies}
        options={() => ({
          title: 'Movies',
          headerShown: !Platform.isTV,
          cardStyleInterpolator: fadeAnimation,
        })}
      />
      <RootStack.Screen
        name={Route.Shows}
        component={Screen.Shows}
        options={() => ({
          title: 'Shows',
          headerShown: !Platform.isTV,
          cardStyleInterpolator: fadeAnimation,
        })}
      />
      <RootStack.Screen
        name={Route.Settings}
        component={Screen.Settings}
        options={() => ({
          title: 'Settings',
          headerShown: !Platform.isTV,
          cardStyleInterpolator: fadeAnimation,
        })}
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
