import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import DishDetail from './DishDetailComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { exp } from 'react-native-reanimated';

const MenuNavigator = createStackNavigator();
const HomeNavigator = createStackNavigator();
const MainNavigator = createDrawerNavigator();

function HomeScreen() {
    return (
        <HomeNavigator.Navigator>
            <HomeNavigator.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Home",
                    headerStyle: {
                        backgroundColor: '#512DAB'
                    },
                    headerTitleStyle: {
                        color: '#fff'
                    },
                    headerTintColor: '#fff'
                }}
            />
        </HomeNavigator.Navigator>
    );
}

function MenuScreen() {
    return (
        <MenuNavigator.Navigator>
            <MenuNavigator.Screen
                name="Menu"
                component={Menu}
                options={{
                    title: "Menu",
                    headerStyle: {
                        backgroundColor: '#512DAB'
                    },
                    headerTitleStyle: {
                        color: '#fff'
                    },
                    headerTintColor: '#fff'
                }}
            />
            <MenuNavigator.Screen
                name="DishDetail"
                component={DishDetail}
                options={{
                    title: "Dish Details",
                    headerStyle: {
                        backgroundColor: '#512DAB'
                    },
                    headerTitleStyle: {
                        color: '#fff'
                    },
                    headerTintColor: '#fff'
                }}
            />
        </MenuNavigator.Navigator>
    );
}

class Main extends Component {

    render() {
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : 20 }}>
                <NavigationContainer>
                    <MainNavigator.Navigator
                        drawerStyle={{
                            backgroundColor: '#D1C4E9'
                        }}
                    >
                        <MainNavigator.Screen name="Home" component={HomeScreen} />
                        <MainNavigator.Screen name="Menu" component={MenuScreen} />
                    </MainNavigator.Navigator>
                </NavigationContainer>
            </View >
        );
    }
}

export default Main;