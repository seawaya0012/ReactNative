import React, { useState, useEffect } from 'react';
import { Text, ImageBackground, StyleSheet, View } from 'react-native'
import Forcast from './Forcast';

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=fcf4a6c0a054974f3cfcf930f3e49155`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
            })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
     
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View>
                    <Text style={styles.sizeText}>Zip Code</Text>
                    <Text style={styles.sizeText}>{props.zipCode}</Text>
                </View>
                <View style={styles.sizenumber}>
                <Forcast {...forecastInfo}/>
                </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection:'row',
        justifyContent:'space-evenly',
        width: '100%',
        height: '100%',
        paddingTop: 50,
    },
     
 sizeText: {
    fontSize:'20px',
    fontWeight: 'bold',
    color: '#f5f5f5',

    
 },
 sizenumber: {
    textShadowOffset: { width: 0.5, height: 1 },
    textShadowColor: '#f5f5f5',

 }
});