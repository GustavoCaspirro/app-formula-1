import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Seasons from './components/seasons';

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default class Home extends Component {
    render() {
        return (
            <View style={ style.container }>
                <Seasons teste="oi"></Seasons>
            </View>
        );
    }
}