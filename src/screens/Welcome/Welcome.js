import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements'
import { globalStyles } from '../../styles/globalStyles'
import {color} from './../../config/config'

export default class Welcome extends Component {
  render() {
    return (
      <View style={[globalStyles.container, {}]}>
        <Text style={[globalStyles.welcome,{}]}>Welcome to InterviewApp!</Text>
        <Button title={"Getting Started"} type={"outline"}
                containerStyle={{width:'100%',height:60}}
                buttonStyle={{borderColor:color.light,height:60}}
                titleStyle={{color:color.light}}
                onPress={() => {
                  this.props.navigation.navigate("Register");
                }}/>
      </View>
    );
  }
}