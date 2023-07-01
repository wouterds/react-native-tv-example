import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Platform } from 'react-native';
import Screen from 'screens';

import { Route } from './routes';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        orientation: Platform.isTV ? 'landscape' : 'portrait',
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#FFF',
        },
        headerStyle: {
          backgroundColor: '#1c2029',
        },
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name={Route.Discover}
        component={Screen.Discover}
        options={{
          title: 'Discover',
          headerShown: !Platform.isTV,
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name={Route.Movie}
        component={Screen.Movie}
        options={({ route }) => ({
          title: (route.params as any)?.title || 'Movie',
          headerShown: !Platform.isTV,
        })}
      />
      <Stack.Screen
        name={Route.Show}
        component={Screen.Show}
        options={({ route }) => ({
          title: (route.params as any)?.title || 'Show',
          headerShown: !Platform.isTV,
        })}
      />
      <Stack.Screen
        name={Route.TrendingToday}
        component={Screen.TrendingToday}
        options={({ route }) => ({
          title: (route.params as any)?.title,
          headerShown: !Platform.isTV,
        })}
      />
      <Stack.Screen
        name={Route.Player}
        component={Screen.Player}
        options={{
          headerShown: false,
          orientation: 'landscape',
          presentation: 'fullScreenModal',
          autoHideHomeIndicator: true,
          animation: 'fade',
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
