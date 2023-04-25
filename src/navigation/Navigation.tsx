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
        headerTintColor: '#38eabe',
        headerTitleStyle: {
          color: '#FFF',
        },
        headerStyle: {
          backgroundColor: '#0D0F13',
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
        name={Route.Movies}
        component={Screen.Movies}
        options={() => ({
          title: 'Movies',
          headerShown: !Platform.isTV,
          animation: 'fade',
        })}
      />
      <Stack.Screen
        name={Route.Shows}
        component={Screen.Shows}
        options={() => ({
          title: 'Shows',
          headerShown: !Platform.isTV,
          animation: 'fade',
        })}
      />
      <Stack.Screen
        name={Route.Settings}
        component={Screen.Settings}
        options={() => ({
          title: 'Settings',
          headerShown: !Platform.isTV,
          animation: 'fade',
        })}
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
    </Stack.Navigator>
  );
};

export default Navigation;
