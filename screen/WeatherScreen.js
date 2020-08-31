import React from 'react'
import { View } from 'react-native'
import Weather from '../compoents/Weather'


export default function WeatherScreen(props){
    return(
        <View>
            <Weather zipCode={props.route.params.zipCode}/>
        </View>
    )
}