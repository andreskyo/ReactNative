import React from 'react'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
    text: {fontSize: 12},
    bold: {fontWeight: "bold"},

    blue: { color: "blue" },
    red:  { color: "red" },
    white: { color: "white" },
    green: { color: "green" },
    yellow: { color: "yellow" },
    pink: { color: "pink" },

    big:{fontSize: 20},
    medium:{fontSize:15},
    small:{fontSize: 10}
})


export const StylesText = ({
    blue,
    yellow,
    green,
    pink,
    white,
    
    big,
    small,
    medium,

    children,
}) => {


    const textStyles = [
        styles.text,
        //colors
        blue&&styles.blue,
        yellow&&styles.yellow,
        green&&styles.green,
        pink&&styles.pink,
        white&&styles.white,
        //size
        big&&styles.big,
        medium&&styles.medium,
        small&&styles.small

    ]

    return (
        <Text style={textStyles}>
            {children}
        </Text>
    )
}

export default StylesText