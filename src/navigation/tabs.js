import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SCMapView from '../screens/SCMapView'
import ReportView from '../screens/ReportView'

const icons = {
    Mapa: {
        name: 'map',
    },
    Relatorios: {
        name: 'view-list',
    },
}

const Tab = createBottomTabNavigator()

const Tabs = ({route}) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { name } = icons[route.name];
                    return <Icon name={name} color={color} size={size} />
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#43a047',
                tabBarActiveBackgroundColor: '#43a047',
                tabBarStyle: [
                    {
                        display: 'flex',
                    },
                    null,
                ],
            })}
        >
            <Tab.Screen name="Mapa" component={SCMapView} options={{headerShown: false}}/>
            <Tab.Screen name="Relatorios" component={ReportView} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}

export default Tabs