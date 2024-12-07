import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const Loading = () => {
  return (
    <View style={styles.container}>
      <LottieView 
        source={require("./animations/loading.json")}
        autoPlay={true}
        loop={true}
        style={styles.animation}
      />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  animation: {
    width: 600, 
    height: 600, 
    marginTop: 300,
  }
})
