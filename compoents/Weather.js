import React, { useState } from 'react';
import { Text, ImageBackground, View, StyleSheet } from 'react-native'
import Forcast from './Forcast';

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
        }) 
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forcast {...forecastInfo}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection:'row',
        justifyContent:'space-evenly',
        width: '100%',
        height: '100%',
        paddingTop: 30,
    }
})