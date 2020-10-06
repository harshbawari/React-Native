import React, { Component, useState } from 'react';
import { View, Text, ScrollView, FlatList, Modal, Button } from 'react-native';
import { Card, Icon, Input, Rating, AirbnbRating } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';
import { postComments } from '../redux/ActionCreators';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import { comments } from '../redux/comments';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId)),
    postComments: (dishId, author, comment, rating) => dispatch(postComments(dishId, author, comment, rating))
});

function RenderDish(props) {
    const dish = props.dish;

    const [showModal, toggleShowModal] = useState(false);
    const [author, setAuthor] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(2.5);

    const submitComment = (props) => {
        const comm = {
            author: author,
            comment: comment,
            rating: rating,
            id: 50,
            dishId: 0,
            date: new Date()
        }

        props.addComment(comm);

        toggleShowModal(false);
    }

    if (dish != null) {
        return (
            <Animatable.View animation="fadeInDown" delay={1000} duration={2000}>
                <Card
                    featuredTitle={dish.name}
                    image={{ uri: baseUrl + dish.image }}
                >
                    <Text style={{ margin: 10 }}>
                        {dish.description}
                    </Text>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row'
                    }}>
                        <Icon
                            raised
                            reverse
                            name={props.favorite ? 'heart' : 'heart-o'}
                            type='font-awesome'
                            color='#f50'
                            onPress={() => props.favorite ? console.log('Already favorite') : props.onPress()}
                        />
                        <Icon
                            raised
                            name={'edit'}
                            type='font-awesome'
                            color='blue'
                            onPress={() => toggleShowModal(true)}
                        />
                        <Modal
                            animationType={"slide"}
                            transparent={false}
                            visible={showModal}
                            onDismiss={() => toggleShowModal(false)}
                            onRequestClose={() => toggleShowModal(false)}
                        >
                            <Rating
                                showRating
                                defaultRating={2.5}
                                onFinishRating={(value) => setRating(value)}
                            />
                            <Input
                                placeholder="Author"
                                onChangeText={(value) => setAuthor(value)}
                                leftIcon={{ type: 'font-awesome', name: 'user' }}
                            />
                            <Input
                                placeholder="Enter your comment here"
                                onChangeText={(value) => setComment(value)}
                                leftIcon={{ type: 'font-awesome', name: 'comment' }}
                            />
                            <Button
                                title="Submit"
                                color='#512DAB'
                                onPress={() => submitComment(props)}
                            />
                            <Button
                                title='Cancel'
                                color='gray'
                                onPress={() => toggleShowModal(false)}
                            />
                        </Modal>
                    </View>
                </Card>
            </Animatable.View>
        );
    }
    else {
        return (<View></View>);
    }
}

class DishDetail extends Component {

    markFavorite(dishId) {
        this.props.postFavorite(dishId);
    }

    addComment(comment) {
        this.props.postComments(comment);
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    render() {
        const dishId = this.props.route.params.dishId;


        return (
            <ScrollView >
                <RenderDish
                    dish={this.props.dishes.dishes.filter((dish) => dish.id === dishId)[0]}
                    favorite={this.props.favorites.some((el) => el === dishId)}
                    onPress={() => this.markFavorite(dishId)}
                    addComment={(comment) => this.addComment(comment)}
                />
                <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)} />
            </ScrollView>
        );
    }
}

function RenderComments(props) {
    const comments = props.comments;

    const renderCommentItem = ({ item, index }) => {
        return (
            <View key={index} style={{ margin: 10 }}>
                <Text style={{ fontSize: 14 }}>
                    {item.comment}
                </Text>
                <Text style={{ fontSize: 12 }}>
                    {item.rating} Stars
                </Text>
                <Text style={{ fontSize: 12 }}>
                    {'-- ' + item.author + ', ' + item.date}
                </Text>
            </View>
        );
    }

    return (
        <Animatable.View animation="fadeInUp" delay={1000} duration={2000}>
            <Card>
                <Card.Title>Comments</Card.Title>
                <FlatList
                    data={comments}
                    renderItem={renderCommentItem}
                    keyExtractor={item => item.id.toString()}
                />
            </Card>
        </Animatable.View>

    );
}

export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);