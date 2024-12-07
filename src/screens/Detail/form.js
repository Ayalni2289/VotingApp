import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Box, Button, Radio } from 'native-base'
import {NEW_ANSWER_MUTATION} from './queries'
import { useMutation } from '@apollo/client'
import { auth } from '../../firebase'

const form = ({options,setIsVoted, id}) => {

    const [selected, setSelected] = useState(null)
    const [submitAnswer,{loading}] = useMutation(NEW_ANSWER_MUTATION);

    const handleSubmit = async () => {
        if(!selected){
          alert("Please select an option to submit your answer");
            return;
        }
        if(!auth.currentUser){
          alert("Please login to submit your answer");
            return;
        }
        try {
          await submitAnswer({
            variables: {
                option_id: selected,
                user_id: auth.currentUser?.uid,
                question_id: id
            },
        });
        setIsVoted(true);
        } catch (error) {
          console.error("Error submitting answer", error);
          alert("Failed to submit answer");
        }
    };

  return (
    <Box py={3}>
      <Radio.Group value={selected} onChange={setSelected}>
        {
            options.map(option => (
                <Radio key={option.id} value={option.id} my={1}>
                    {option.text}
                </Radio>
            ))
        }
      </Radio.Group>
      <Button mt={7} onPress={handleSubmit} isLoading={loading}>Submit</Button>
    </Box>
  )
}

export default form

const styles = StyleSheet.create({})