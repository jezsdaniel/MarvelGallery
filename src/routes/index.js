import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'react-native';
import Marvel from '../pages/Marvel';
import Character from '../pages/Character';
import {colors} from '../styles/theme';

const Router = createStackNavigator();

const Routes = () => {
  return (
    <Router.Navigator>
      <Router.Screen
        name="Marvel"
        component={Marvel}
        options={{
          headerTitle: (
            <Text style={{fontSize: 34, color: colors.primaryColor}}>
              Marvel Gallery
            </Text>
          ),
          headerStyle: {backgroundColor: 'black', height: 110},
          headerTitleAlign: 'center',
        }}
      />
      <Router.Screen
        name="Character"
        component={Character}
        options={{
          headerTitle: (
            <Text style={{fontSize: 34, color: colors.primaryColor}}>
              Characters
            </Text>
          ),
          headerTintColor: colors.primaryColor,
          headerStyle: {backgroundColor: 'black', height: 110},
          headerTitleAlign: 'center',
        }}
      />
    </Router.Navigator>
  );
};

export default Routes;
