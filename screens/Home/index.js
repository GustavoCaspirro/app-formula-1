import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Seasons from './components/seasons';
import fonts from '../../fonts';
import { SafeAreaView } from 'react-navigation';
import Logo from '../../components/Logo';

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

(fonts());

export default class Home extends Component {
    static navigationOptions = {
        headerTitle: <Logo/>
    }
    constructor(props) {
        super(props);

        this.getData = this.getData.bind(this);
    }

    getData(year) {
        this.props.navigation.navigate('Races', { season: year });
    }

    render() {
        return (
            <SafeAreaView style={ style.container }>
                <Seasons handleSeason= { this.getData }></Seasons>
            </SafeAreaView>
        );
    }
}