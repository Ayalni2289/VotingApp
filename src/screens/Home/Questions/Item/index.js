import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Box } from 'native-base'
import DeleteButton from './DeleteButton'
import { auth } from '../../../../firebase'

const Item = ({item}) => {

    const navigation = useNavigation()
   
  return (
    <Box style ={styles.item}>
    <TouchableOpacity 
        style={styles.titleBtn}
        onPress={() => navigation.navigate("Detail",{id: item.id})}>
            <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
        {
        auth.currentUser.uid === item.user_id && <DeleteButton id={item.id}/>
        }
     </Box>
  )
}

export default Item

const styles = StyleSheet.create({
    item:{
        borderBottomWidth:1,
        borderColor:'#ddd',
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    text: {
        fontSize: 20,
        color: "#333"
    },
    titleBtn: {flex:1, padding: 10},
})