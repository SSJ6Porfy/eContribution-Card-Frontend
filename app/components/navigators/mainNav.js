import React from 'react';
import { Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import newContributionForm from '../contributions/newContributionForm';
import newEventForm from '../events/newEventForm';
import LoginForm from '../login/LoginForm';

const mainDrawer = DrawerNavigator(
    {
        "Add New Event": {
            path: '/',
            screen: newEventForm
        },
        "Add New Contribution": {
            path: '/',
            screen: newContributionForm
        },
        "Login": {
            path: "/",
            screen: LoginForm
        }
    },
    {
        initialRouteName: 'Login',
        drawerPosition: 'left'
    }
);

export default mainDrawer;