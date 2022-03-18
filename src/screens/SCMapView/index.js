import React, { useState, useEffect } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import json from '../../json/data'
import styles from './styles'

const calculatePosition = (devices) => {
    let lat = 0, lng = 0

    devices.forEach(device => {
        lat += device.position.lat
        lng += device.position.lng
    })

    return {
        lat: lat / devices.length,
        lng: lng / devices.length,
    }
}

const SCMapView = () => {
    const [data, setData] = useState([])

    const update = () => {
        setData(json.data)
    }

    useEffect(() => {
        update()

        const interval = setInterval(() => {
            setTimeout(() => {
                console.log(`[${json.status}] ${json.message}`)
                update()
            }, 1000)
        }, 60000)

        return () => clearInterval(interval)
    }, [])

    return (
        <MapView style={styles.container}
            provider={PROVIDER_GOOGLE}
            mapType="satellite"
            minZoomLevel={18}
            loadingEnabled={true}
            initialRegion={{
                latitude: -25.585928,
                longitude: -48.565043,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            {
                data.map((person, index) => {
                    const pos = calculatePosition(person.devices)

                    return (
                        <Marker key={index} coordinate={{
                                latitude: pos.lat,
                                longitude: pos.lng,
                            }}
                            title={person.name}
                            description={person.type}
                        />
                    )
                })
            }
        </MapView>
    )
}

export default SCMapView