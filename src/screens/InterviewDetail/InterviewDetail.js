import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements'
import { globalStyles } from '../../styles/globalStyles'

import {color } from '../../config/config'

export default class InterviewDetail extends Component {
  render() {
    return (
      <View style={[globalStyles.containerTransparent,{justifyContent: 'space-between'}]}>
        <View/>
        <View style={{alignItems:"center"}}>
          <Text>Arkademy</Text>
          <Text>Bootcamp batch 10 participant selection</Text>
          <Text>number of questions : 4</Text>
        </View>
        
        <Button title={"Let's Start"}
                containerStyle={{ width: '100%', height: 60 }}
                        buttonStyle={{ borderColor: color.light, height: 60, backgroundColor:color.primary }}
                        titleStyle={{ color: color.light }}
                onPress={() => {
                  this.props.navigation.navigate("Question");
                }}/>
      </View>
    );
  }
}