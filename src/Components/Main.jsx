import React from 'react'
import Repository from './Repository'

import { StyleSheet, Alert, Text, View } from 'react-native'


const styles = StyleSheet.create({
    container:{
        backgroundColor:"black"
    },

    titulo: {
        color: "white",
        fontWeight: "bold",
        
    }
})


const main = () => {
    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>Pokemon</Text>


            <Repository />


        </View>
    )
}

export default main