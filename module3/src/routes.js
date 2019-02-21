import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Main, Favorites } from '~/pages';

import { colors } from './styles';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Favorites,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.primaryDark,
        },
        headerTintColor: colors.white,
        headerBackTitle: null,
      },
    },
  ),
);

export default Routes;
