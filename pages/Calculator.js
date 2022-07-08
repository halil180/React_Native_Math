import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
function Calculator({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button icon="camera" mode="contained"  onPress={() => navigation.navigate('Details')}>
    Press me
  </Button>
  <Button icon="camera" mode="contained"  onPress={() => navigation.navigate('Details')}>
    Press me
  </Button>
  <Button icon="camera" mode="contained"  onPress={() => navigation.navigate('Details')}>
    Press me
  </Button>
    </View>
  )
}

export default Calculator

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin:14,
      color:'green',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  