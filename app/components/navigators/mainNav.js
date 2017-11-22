import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';

import newContributionForm from '../contributions/newContributionForm';
import newEventForm from '../events/newEventForm';

let MainScreenNavgiator = TabNavigator({
    "New Contribution": { screen: newContributionForm },
    "New Event": { screen: newEventForm }
});

MainScreenNavgiator.navigationOptions = {
    title: "Tab Example"
};


const mainDrawer = DrawerNavigator(
    {
        "Add New Event": {
            path: '/',
            screen: newEventForm
        },
        "Add New Contribution": {
            path: '/',
            screen: newContributionForm
        }
    },
    {
        initialRouteName: 'Add New Event',
        drawerPosition: 'left'
    }
);

export default mainDrawer;