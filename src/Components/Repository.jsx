import React from 'react'
import Pk from '../pokemons/Pk'
import RepositoryItems from '../Components/RepositoryItems';

import { FlatList, StyleSheet, Alert, Text, View } from 'react-native'



export const Repository = () => {
    return (
        <>
            <FlatList
                data={Pk}
                style={{ padding: 20 }}
                ItemSeparatorComponent={() => <Text>------</Text>}
                renderItem={({ item: poke }) => (
                    <RepositoryItems {...poke} />
                )}
            />
        </>
    )

}

export default Repository