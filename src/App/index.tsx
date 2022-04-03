import { withNavigation } from 'hocs/withNavigation';
import { withSafeAreaContext } from 'hocs/withSafeAreaContext';
import React from 'react';
import { withStore } from 'store/hocs';

import Navigation from './Navigation';
import Screen from './Screen';

const App = () => (
  <>
    <Navigation />
    <Screen.Splash />
  </>
);

export default withSafeAreaContext(withNavigation(withStore(App)));
