import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  FlatList,
  Image
} from 'react-native'

import { ListItem } from './components'
import data from './data.json'

const App = () => {

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={data}
          renderItem={({ item }) =>
            <ListItem
              Name={item.name}
              Image={item.image}
              Location={item.location}
              Likes={item.likes}
            />}
        />
      </View>
    </SafeAreaView>

  )
}

export default App;
