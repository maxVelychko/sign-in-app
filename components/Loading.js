import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import * as firebase from 'firebase';

export default class Loading extends React.Component {
    componentDidMount() {
        // check if user signed in
        firebase.auth().onAuthStateChanged(user => {
            console.log("action onAuthStateChanged", !!user);
            this.props.navigation.navigate(user ? 'Home' : 'Login');
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});