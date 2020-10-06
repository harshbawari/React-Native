import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

export default class Contact extends Component {

    static navigationOptions = {
        title: "Contact Us",
        headerStyle: {
            backgroundColor: '#fff'
        }
    }

    render() {
        const RenderAbout = () => {
            return (
                <ScrollView>
                    <Animatable.View animation="fadeInDown" delay={1000} duration={2000}>
                        <Card containerStyle={{ margin: 20 }}>
                            <Card.Title>Contact Information</Card.Title>
                            <Card.Divider />
                            <Text>121, Clear Water Bay Road</Text>
                            <Text>Clear Water Bay, Kowloon</Text>
                            <Text>HONG KONG</Text>
                            <Text>Tel: +852 1234 5678</Text>
                            <Text>Fax: +852 8765 4321</Text>
                            <Text>Email:confusion@food.net</Text>
                        </Card >
                    </Animatable.View>
                </ScrollView>
            );
        }
        return (
            <RenderAbout />
        );
    }
}