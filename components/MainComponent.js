import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MenuNavigator = createStackNavigator();

class Main extends Component {

    render() {
        return (
            <View style={{ flex: 1, paddingTop: 2 }}>
                <NavigationContainer>
                    <MenuNavigator.Navigator>
                        <MenuNavigator.Screen name="Menu" component={Menu} />
                        <MenuNavigator.Screen name="DishDetail">
                            {props => <DishDetail {...props} />}
                        </MenuNavigator.Screen>
                    </MenuNavigator.Navigator>
                </NavigationContainer>
            </View>
        );
    }
}

export default Main;