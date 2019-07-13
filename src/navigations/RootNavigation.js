import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation"


import Loading from '../screens/Loading/Loading'
import Welcome from '../screens/Welcome/Welcome'
import Register from '../screens/Register/Register'
import Question from '../screens/Question/Question'

const Initial = createStackNavigator({
    Loading: {
        screen: Loading,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    }
})

const App = createStackNavigator({
    Welcome: {
        screen : Welcome,
        navigationOptions : ({navigation}) => ({
            header: null
        })
    },
    Register : {
        screen : Register,
        navigationOptions : ({navigation}) => ({
            header: null
        })
    },
    Question : {
        screen : Question,
        navigationOptions : ({navigation}) => ({
            headerLeft : null
        })
    }
},
{
    initialRouteName: 'Welcome'
})


const RootNavigation = createAppContainer(createSwitchNavigator(
    {
        Initial: Initial,
        App: App
    },
    {

        initialRouteName: 'Initial',
        resetOnBlur: true,
    }
));

export default RootNavigation