import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import Weather from '../compoents/Weather'


export default function WeatherScreen(props){
    return(
        <View style={styles.sss}>
            <Weather zipCode={props.route.params.zipCode}/>
            <StatusBar style="auto" />
        </View>
    )
}
const styles = StyleSheet.create({
    sss: {
        width: '100%',
        height: '100%',

        
    },
})
