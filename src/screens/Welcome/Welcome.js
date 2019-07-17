import React, { Component } from 'react';
import { Text, View, Image} from 'react-native';
import { Button } from 'react-native-elements'
import { globalStyles } from '../../styles/globalStyles'
import {color} from './../../config/config'

export default class Welcome extends Component {
  render() {
    return (
      <View style={[globalStyles.container, {}]}>
        <Text style={[globalStyles.welcome,{}]}>Welcome to InterviewApp!</Text>
        <Image source={require('../../public/img/bulan.png')} style={{width:250,height:250}} />
        <Button title={"Getting Started"} type={"outline"}
                containerStyle={{width:'100%',height:50}}
                buttonStyle={{borderColor:color.light,height:50}}
                titleStyle={{color:color.light}}
                onPress={() => {
                  this.props.navigation.navigate("Register");
                }}/>
      </View>
    );5
  }
}