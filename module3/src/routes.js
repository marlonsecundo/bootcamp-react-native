import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Main, Favorites } from '~/pages';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Favorites,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {},
        headerBackTitle: null,
      },
    },
  ),
);

export default Routes;
