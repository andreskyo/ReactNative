import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants'

import Main from './src/Components/Main'
import Pk from './src/Components/Repository'

const styles=StyleSheet.create({
  container:{
    marginTop:Constants.statusBarHeight, 
   
  }
})


export default function App() {
  return (
    <View style={styles.container}>

      <Main />
      
    </View>

  );
}


