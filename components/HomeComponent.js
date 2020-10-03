import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

class Home extends Component {

    static navigationOptions = {
        title: "Home",
        headerStyle: {
            backgroundColor: '#fff'
        }
    }

    render() {
        return (
            <View>
                <Text>Home Component</Text>
            </View>
        );
    }
}

export default Home;