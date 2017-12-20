import React from 'react';
import { Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import newContributionForm from '../contributions/newContributionForm';
import newEventForm from '../events/newEventForm';
import LoginForm from '../login/loginForm';
import SignupForm from "../login/signupForm";

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
        },
        "Signup": {
            path: "/",
            screen: SignupForm
        }
    },
    {
        initialRouteName: 'Login',
        drawerPosition: 'left'
    }
);

export default mainDrawer;