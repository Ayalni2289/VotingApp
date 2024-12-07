import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, Heading } from 'native-base'
import { Progress } from 'native-base'

const Item = ({item,total}) => {
  return (
    <Box my={3}>
      <Heading
      size="sm"
      mb={2}
      >
        {item.title} ({((item.answers_aggregate.aggregate.count/total)*100).toFixed(2)}%){"-"}{item.answers_aggregate.aggregate.count}
      </Heading>
      <Progress size={'lg'} value={item.answers_aggregate.aggregate.count} max={total} />
    </Box>
  )
}

export default Item

const styles = StyleSheet.create({})