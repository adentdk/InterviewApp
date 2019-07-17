import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements'

import { connect } from 'react-redux'
import * as actionUser from "./../../redux/actions/user"

import { globalStyles } from '../../styles/globalStyles'
import { color } from './../../config/config'

import Loading from './../components/Loading'

class Register extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            phone_number: '',
            isLoading: false,
            isError: false,
            isSuccess: false
        }
    }

    register = async () => {
        this.setState({
            isLoading: true
        })

        await this.props.register({
            name: this.state.name,
            email: this.state.email,
            phone_number: this.state.phone_number,
        })

        // this.props.navigation.dispatch('InverviewDetail')
    }

    cekRegister = async () => {

        if (this.props.users.isError) {
            Alert.alert('Failed',
                'something went wrong')

            this.setState({
                isLoading: false,
            })

            this.props.defaultValue()
        }
        if (this.props.users.isSuccess) {
            this.props.defaultValue()
            this.props.navigation.navigate("Authenticated")
            this.setState({
                isLoading: false,
            })

        }
    }

    validasiForm = () => {
        if(this.state.name == '') return Alert.alert('Failed','name cannot be null')
        else if(this.state.email == '') return Alert.alert('Failed','email cannot be null')
        else if(this.state.phone_number == '') return Alert.alert('Failed','phone_number cannot be null')
        else return this.register()
    }

    render() {
        
        this.cekRegister()
        if (this.state.isLoading) {
            return <Loading />
        } else {
            return (
                <View style={globalStyles.container}>
                    <View style={styles.formWrapper} >
                        <Input placeholder={"Your name"}
                            placeholderTextColor={"rgba(255,255,255,0.4)"}
                            style={{ color: color.light }}
                            inputStyle={{ color: color.light}}
                            containerStyle={{ marginBottom: 10}}
                            value={this.state.name}
                            onChangeText={(text) => {
                                this.setState({
                                    name: text
                                })
                            }}
                            rightIconContainerStyle={{backgroundColor:"rgba(255,255,255,.1)", paddingHorizontal:7, marginBottom:-5}}
                            rightIcon={{name: "user", type:"antdesign", color:color.light}}
                        />

                        <Input placeholder={"Your email"}
                            placeholderTextColor={"rgba(255,255,255,0.4)"}
                            style={{ color: color.light }}
                            keyboardType={"email-address"}
                            inputStyle={{ color: color.light}}
                            containerStyle={{ marginBottom: 10 }}
                            value={this.state.email}
                            onChangeText={(text) => {
                                this.setState({
                                    email: text
                                })
                            }}
                            rightIconContainerStyle={{backgroundColor:"rgba(255,255,255,.1)", paddingHorizontal:7, marginBottom:-5}}
                            rightIcon={{name: "mail", type:"antdesign", color:color.light}}
                        />

                        <Input placeholder={"Your phone number"}
                            placeholderTextColor={"rgba(255,255,255,0.4)"}
                            style={{ color: color.light }}
                            keyboardType={"phone-pad"}
                            inputStyle={{ color: color.light}}
                            containerStyle={{ marginBottom: 10 }}
                            value={this.state.phone_number}
                            onChangeText={(text) => {
                                this.setState({
                                    phone_number: text
                                })
                            }}
                            rightIconContainerStyle={{backgroundColor:"rgba(255,255,255,.1)", paddingHorizontal:7, marginBottom:-5}}
                            rightIcon={{name: "phone", type:"antdesign", color:color.light}}
                        />

                    </View>
                    <Button title={"Register"} type={"outline"}
                        containerStyle={{ width: '100%', height: 50 }}
                        buttonStyle={{ borderColor: color.light, height: 50 }}
                        titleStyle={{ color: color.light }}
                        onPress={() => {
                            this.validasiForm()
                        }} />
                </View>
            );
        }
    }
}


const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register: (data) => dispatch(actionUser.register(data)),
        defaultValue: () => dispatch(actionUser.defaultValue())
    }
}

const RegisterScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)

export default RegisterScreen


const styles = StyleSheet.create({
    formWrapper: {
        flex: 1,
        justifyContent: 'center',
        height: 400,
        width: '100%'
    }
})