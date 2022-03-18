import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'

const getDetectedDevices = (devices) => {
    let str = ''

    devices.forEach((device) => {
        str += device.name + ', '
    })

    return str.slice(0, -2)
}

const ReportItem = (props) => {
    return (
        <View style={styles.container}>
            <Icon name="account" color="#43a047" size={48}/>
            <View style={styles.info}>
                <Text style={styles.name}>{props.name}</Text>
                <Text>Detectado em: {getDetectedDevices(props.devices)}</Text>
            </View>
        </View>
    )
}

export default ReportItem