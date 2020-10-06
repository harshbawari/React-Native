import React, { Component } from 'react';
import { View, Text, Platform, Image, StyleSheet, ScrollView } from 'react-native';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Favorites from './FavoriteComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import Reservation from './ReservationComponent';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders())
});

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
const FavoritesNavigator = createStackNavigator();
const ReservationNavigator = createStackNavigator();
const AboutNavigator = createStackNavigator();

function ReservationScreen({ navigation }) {
    return (
        <ReservationNavigator.Navigator>
            <ReservationNavigator.Screen
                name="Reservation"
                component={Reservation}
                options={{
                    title: "Reservation",
                    drawerLabel: 'Reservation',
                    drawerIcon: ({ tintColor }) => {
                        <Icon name='cutlery' type='font-awesome' size={24} color={tintColor} />
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
        </ReservationNavigator.Navigator>
    );
}

function FavoritesScreen({ navigation }) {
    return (
        <FavoritesNavigator.Navigator>
            <FavoritesNavigator.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    title: "Favorites",
                    drawerLabel: 'Favorites',
                    drawerIcon: ({ tintColor }) => {
                        <Icon name='heart' type='font-awesome' size={24} color={tintColor} />
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
        </FavoritesNavigator.Navigator>
    );
}

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

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

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
                        <MainNavigator.Screen name="Favorites" component={FavoritesScreen} />
                        <MainNavigator.Screen name="Reserve Table" component={ReservationScreen} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);