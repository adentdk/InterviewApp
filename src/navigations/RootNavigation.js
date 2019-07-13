import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation"

import {color} from '../config/config'

import Loading from '../screens/Loading/Loading'
import Welcome from '../screens/Welcome/Welcome'
import Register from '../screens/Register/Register'
import InterviewDetail from '../screens/InterviewDetail/InterviewDetail'
import Question from '../screens/Question/Question'


const Initial = createStackNavigator({
    Loading: {
        screen: Loading,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    }
})

const UnAuthenticated = createStackNavigator({
    Welcome: {
        screen : Welcome,
        navigationOptions : ({navigation}) => ({
            header: null
        })
    },
    Register : {
        screen : Register,
        navigationOptions : ({navigation}) => ({
            title : "Register Yourself",
        })
    },
},
{
    initialRouteName: 'Welcome'
})

const Authenticated = createStackNavigator({
    InterviewDetail: {
        screen : InterviewDetail,
        navigationOptions : ({navigation}) => ({
            title : "Interview Details",
             headerStyle: {
              backgroundColor: color.primary,
            },
                headerTintColor: color.light,
                headerTitleStyle: {
              fontWeight: 'bold',
            },
        })
    },
    Question : {
        screen : Question,
        navigationOptions : ({navigation}) => ({
            title : "Interview Room",
             headerStyle: {
              backgroundColor: color.primary,
            },
                headerTintColor: color.light,
                headerTitleStyle: {
              fontWeight: 'bold',
            },
        })
    },
},
{
    initialRouteName: 'InterviewDetail'
})



const RootNavigation = createAppContainer(createSwitchNavigator(
    {
        Initial: Initial,
        UnAuthenticated: UnAuthenticated,
        Authenticated : Authenticated
    },
    {

        initialRouteName: 'Initial',
        resetOnBlur: true,
    }
));

export default RootNavigation