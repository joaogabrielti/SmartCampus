import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import ReportItem from '../../components/ReportItem'
import json from '../../json/data'
import styles from './styles'

const ReportView = () => {
    const [data, setData] = useState([])

    const update = () => {
        setData(json.data)
    }

    useEffect(() => {
        update()
    })

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Pessoas em Trânsito</Text>
            </View>
            <FlatList data={data}
                renderItem={({item}) => (
                    <ReportItem name={item.name} devices={item.devices}/>
                )}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default ReportView