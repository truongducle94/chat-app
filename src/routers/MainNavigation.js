import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SplashScreen from 'containers/SplashScreen'
import SCREEN_NAME from 'lib/utils/screenName'
import ChatScreen from 'features/chat/Containers/ChatScreen'

const MainStack = createStackNavigator({
    [SCREEN_NAME.SPLASH_SCREEN]: SplashScreen,
    [SCREEN_NAME.CHAT_SCREEN]: ChatScreen
},
{
    headerMode: 'none'
})

const MainNavigation = createAppContainer(MainStack)

export default MainNavigation