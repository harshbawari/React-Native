import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const MenuNavigator = createStackNavigator();
const HomeNavigator = createStackNavigator();
const MainNavigator = createDrawerNavigator();
const ContactNavigator = createStackNavigator();
const AboutNavigator = createStackNavigator();

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

function AboutScreen() {
    return (
        <AboutNavigator.Navigator>
            <AboutNavigator.Screen
                name="AboutUs"
                component={About}
                options={{
                    title: "About",
                    headerStyle: {
                        backgroundColor: '#512DAB'
                    },
                    headerTitleStyle: {
                        color: '#fff'
                    },
                    headerTintColor: '#fff'
                }}
            />
        </AboutNavigator.Navigator>
    );
}

function ContactScreen() {
    return (
        <ContactNavigator.Navigator>
            <ContactNavigator.Screen
                name="ContactUs"
                component={Contact}
                options={{
                    title: "Contact Us",
                    headerStyle: {
                        backgroundColor: '#512DAB'
                    },
                    headerTitleStyle: {
                        color: '#fff'
                    },
                    headerTintColor: '#fff'
                }}
            />
        </ContactNavigator.Navigator>
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
                        <MainNavigator.Screen name="AboutUs" component={AboutScreen} />
                        <MainNavigator.Screen name="Menu" component={MenuScreen} />
                        <MainNavigator.Screen name="ContactUs" component={ContactScreen} />
                    </MainNavigator.Navigator>
                </NavigationContainer>
            </View >
        );
    }
}

export default Main;