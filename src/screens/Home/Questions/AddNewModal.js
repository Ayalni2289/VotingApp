import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Box, Button,  Heading, Input, useToast } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { ADD_NEW_QUESTION_MUTATION } from './queries'
import { useMutation } from '@apollo/client'
import {auth} from '../../../firebase'


const AddNewModal = ({closeModal}) => {

    const toast = useToast();
    const [mutation, {loading,error}] = useMutation(ADD_NEW_QUESTION_MUTATION);

    const [title, setTitle] = useState('')
    const [options, setOptions] = useState([{text: ''}, {text: ''}])

    const handleOptionChange = (val, i) => {
        const data = [...options]
        data[i].text = val;
        setOptions(data)
    }

    const handleNewOption = () => {
        setOptions([...options, {text: ''}])
        } 

    const handleSubmit = async () => {
        const options_data = options.filter(item => item.text !== '')
        if(!title || options_data.length < 2) {
            return;
        }
            await mutation({
            variables: {
                title,
                options:options_data,
                user_id: auth.currentUser?.uid
            },
        });

        closeModal();

        toast.show({
            title: "Question Added",
            placement: "bottom",
            status: "success",
            duration: 3000,
        });
        console.log(result);
    }
  return (
    <Box p={6}  flex={"1"} backgroundColor="#ddd"> 
        <Box flex={1}>
            <Heading my={1}>
                Questions
            </Heading>
            <Input value={title} onChangeText={setTitle} placeholder='Enter a new question...' fontSize={20} borderColor={"blueGray.800"} mb={4} />
            <Heading my={1}> Options </Heading>
            {
                options.map((item,i) => (
                    <Input
                    placeholder='Enter a new option...'
                    fontSize={18}
                    borderColor={"blueGray.800"}
                    mb={1} 
                    key={i} 
                    value={item.text} 
                    onChangeText={(val) => handleOptionChange(val, i)}
                    />
                ))}
          
            <Box mt={3}>
                <Button.Group variant="solid" space={2} justifyContent={'center'}>
                    <Button 
                    colorScheme={"coolGray"} 
                    size={'md'} 
                    onPress={handleNewOption}
                    disabled={options.length > 4}
                    leftIcon={
                    <Ionicons name="add-circle" color={"white"} size={32} />
                    }>
                    </Button>
                </Button.Group>
            </Box>
        </Box>
        <Box>
            <Button size={'md'} onPress={handleSubmit} isLoading={loading} >
                    Save
            </Button>    
        </Box>
        
    </Box>
  )
}

export default AddNewModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }
})