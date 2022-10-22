/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <View style = {{flex: 1, alignItems: 'stretch'}}>
        <View style = {{height: '90%', backgroundColor: '#b2b2b2'}}>
          <Text style = {{ textAlign: 'center', marginVertical: '50%', fontSize: 20, fontWeight: 'bold'}}>Kosong Masih Belum Ada Item</Text>
        </View>
        <View style = {{height: '10%', backgroundColor: '#3c4048', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style = {{height: 30, width: 30, backgroundColor: "#FF3F00"}} />
          <View style = {{height: 30, width: 30, backgroundColor: "#ffde00"}} />
          <View style = {{height: 30, width: 30, backgroundColor: "#77D970"}} />
        </View>
      </View>
    </>
  );
}