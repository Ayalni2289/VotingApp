import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Box, Heading } from 'native-base'
import LottieView from 'lottie-react-native'

const EmptyList = ({message}) => {
  return (
    <Box justifyContent={'center'} alignItems={"center"}>
      <LottieView 
        source={require("./animations/Empty.json")}
        autoPlay={true}
        loop={true}
        style={styles.animation}
      />
      <Heading size={"md"} fontWeight={"medium"}>{message}</Heading>
    </Box>
  )
}

export default EmptyList

const styles = StyleSheet.create({
  animation: {
    width: 500, 
    height: 500,
    marginBottom: 50,
  }
})