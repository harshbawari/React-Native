import React, { Component } from 'react';
import { View, Text, Platform, Image, StyleSheet, ScrollView } from 'react-native';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';

const CustomDrawerContentComponent = (props) => {
    return (
        <ScrollView {...props}>
            <View style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                <View style={styles.drawerHeader}>
                    <View style={{ flex: 1 }}>
                        <Image source={require('./images/logo.png')} style={styles.drawerImage} />
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
                    </View>
                </View>
                <DrawerItemList {...props} />
            </View>
        </ScrollView>
    );
}

const MenuNavigator = createStackNavigator();
const HomeNavigator = createStackNavigator();
const MainNavigator = createDrawerNavigator();
const ContactNavigator = createStackNavigator();
const AboutNavigator = createStackNavigator();

function HomeScreen({ navigation }) {
    return (
        <HomeNavigator.Navigator>
            <HomeNavigator.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Home",
                    drawerLabel: 'Home',
                    drawerIcon: ({ tintColor }) => {
                        <Icon name='home' type='font-awesome' size={24} color={tintColor} />
                    },
                    headerStyle: {
                        backgroundColor: '#512DAB'
                    },
                    headerTitleStyle: {
                        color: '#fff'
                    },
                    headerTintColor: '#fff',
                    headerLeft: () => <Icon name='menu' size={24} color='white' onPress={() => navigation.toggleDrawer()} />
                }}
            />
        </HomeNavigator.Navigator>
    );
}

function AboutScreen({ navigation }) {
    return (
        <AboutNavigator.Navigator>
            <AboutNavigator.Screen
                name="AboutUs"
                component={About}
                options={{
                    title: "About Us",
                    drawerLabel: 'AboutUs',
                    drawerIcon: ({ tintColor }) => {
                        <Icon name='info-circle' type='font-awesome' size={24} color={tintColor} />
                    },
                    headerStyle: {
                        backgroundColor: '#512DAB'
                    },
                    headerTitleStyle: {
                        color: '#fff'
                    },
                    headerTintColor: '#fff',
                    headerLeft: () => <Icon name='menu' size={24} color='white' onPress={() => navigation.toggleDrawer()} />
                }}
            />
        </AboutNavigator.Navigator>
    );
}

function ContactScreen({ navigation }) {
    return (
        <ContactNavigator.Navigator>
            <ContactNavigator.Screen
                name="ContactUs"
                component={Contact}
                options={{
                    title: "Contact Us",
                    drawerLabel: 'ContactUs',
                    drawerIcon: ({ tintColor }) => {
                        <Icon name='address-card' type='font-awesome' size={22} color={tintColor} />
                    },
                    headerStyle: {
                        backgroundColor: '#512DAB'
                    },
                    headerTitleStyle: {
                        color: '#fff'
                    },
                    headerTintColor: '#fff',
                    headerLeft: () => <Icon name='menu' size={24} color='white' onPress={() => navigation.toggleDrawer()} />
                }}
            />
        </ContactNavigator.Navigator>
    );
}

function MenuScreen({ navigation }) {
    return (
        <MenuNavigator.Navigator>
            <MenuNavigator.Screen
                name="Menu"
                component={Menu}
                options={{
                    title: "Menu",
                    drawerLabel: 'Menu',
                    drawerIcon: ({ tintColor }) => {
                        <Icon name='list' type='font-awesome' size={24} color={tintColor} />
                    },
                    headerStyle: {
                        backgroundColor: '#512DAB'
                    },
                    headerTitleStyle: {
                        color: '#fff'
                    },
                    headerTintColor: '#fff',
                    headerLeft: () => <Icon name='menu' size={24} color='white' onPress={() => navigation.toggleDrawer()} />
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
                    headerTintColor: '#fff',
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
                        drawerContent={(props) => <CustomDrawerContentComponent {...props} />}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});

export default Main;