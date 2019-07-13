import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements'
import { globalStyles } from '../../styles/globalStyles'

export default class Welcome extends Component {
  render() {
    return (
      <View style={[globalStyles.container, { justifyContent: 'space-between' }]}>
        <Text style={globalStyles.welcome}>Welcome to InterviewApp!</Text>
        <Button title={"Getting Started"} type={"outline"}
                onPress={() => {
                  this.props.navigation.navigate("Initiation");
                }}/>
      </View>
    );
  }
}