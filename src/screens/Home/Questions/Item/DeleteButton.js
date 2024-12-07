import { StyleSheet} from 'react-native'
import React from 'react'
import { useMutation } from '@apollo/client'
import { DELETE_QUESTION_MUTATION } from '../queries'
import { IconButton, Spinner } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons'

const DeleteButton = ({id, user_id}) => {

    const [deleteQuestion, {loading}] = useMutation(DELETE_QUESTION_MUTATION,{
        variables: {
            id,
        },
    })
    const handleDelete = async () => {
        try {
            await deleteQuestion()
        } catch (error) {
            console.log(error)
        }
    }

    if(loading){
        return (
            <Spinner color="indigo.500" mr={5}/>
        )
    }

  return (
            <IconButton
            onPress={handleDelete}
            disabled={loading}
            colorScheme="tertiary"
            _icon={{
            as:Ionicons,
            name:"trash",
            size:'lg',
            }}
        />
  )
}

export default DeleteButton

const styles = StyleSheet.create({})