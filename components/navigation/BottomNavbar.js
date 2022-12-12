import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home"></Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs;