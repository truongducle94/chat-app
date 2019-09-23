import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SplashScreen from 'containers/SplashScreen'

const MainStack = createStackNavigator({
    SplashScreen: SplashScreen
},
{
    headerMode: 'none'
})

const MainNavigation = createAppContainer(MainStack)

export default MainNavigation