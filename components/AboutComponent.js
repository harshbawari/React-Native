import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        leaders: state.leaders
    }
}

class About extends Component {

    render() {
        const RenderHistory = () => {
            return (
                <Card>
                    <Card.Title>Our History</Card.Title>
                    <Card.Divider />
                    <Text>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</Text>
                    <Text style={{ marginTop: 20 }}>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</Text>
                </Card>
            );
        }



        const renderLeaders = this.props.leaders.leaders.map((leader, i) => {
            return (
                <ListItem
                    key={i}
                    title={leader.name}
                    subtitle={leader.description}
                    leftAvatar={{ source: { uri: baseUrl + leader.image } }}
                />
            );
        });

        if (this.props.leaders.isLoading) {
            return (
                <ScrollView>
                    <RenderHistory />
                    <Card>
                        <Card.Title>Corporate Leadership</Card.Title>
                        <Card.Divider />
                        <Loading />
                    </Card>
                </ScrollView>
            );
        }
        else if (this.props.leaders.errMess) {
            return (
                <ScrollView>
                    <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                        <RenderHistory />
                        <Card>
                            <Card.Title>Corporate Leadership</Card.Title>
                            <Card.Divider />
                            <Text>{this.props.leaders.errMess}</Text>
                        </Card>
                    </Animatable.View>
                </ScrollView>
            );
        }
        else {
            return (
                <ScrollView>
                    <Animatable.View animation="fadeInDown" delay={1000} duration={2000}>
                        <RenderHistory />
                        <Card>
                            <Card.Title>Corporate Leadership</Card.Title>
                            <Card.Divider />
                            {renderLeaders}
                        </Card>
                    </Animatable.View>
                </ScrollView>
            );
        }

    }
}

export default connect(mapStateToProps)(About);