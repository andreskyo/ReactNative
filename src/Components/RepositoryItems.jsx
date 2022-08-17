import React from 'react'
import { FlatList, StyleSheet, Alert, Text, View } from 'react-native'

import StyledText from '../Styles/StylesText';


const RepositoryItems = (props) => {
    return (
        <>

            <View key={props.id}>
                <StyledText big yellow>{props.name}</StyledText>
                <StyledText medium pink>{props.type}</StyledText>
            </View>

        </>
    )
}

export default RepositoryItems