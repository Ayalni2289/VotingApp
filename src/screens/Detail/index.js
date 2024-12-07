import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import Loading from '../../components/loading';
import { GET_QUESTION_DETAILS } from './queries';
import { Box, Heading } from 'native-base';
import Form from './form'
import Result from './Results/index';
import { auth } from '../../firebase';

const Detail = ({route}) => {
  const {id} = route.params;
  const [isVoted, setIsVoted] = useState(false);

  const {loading, data} = useQuery(GET_QUESTION_DETAILS, {
    variables: {
      id,
      user_id : auth.currentUser?.uid
    },
    fetchPolicy: "network-only",
  });

  if (loading){
    return(
    <Box mt={5}>
      <Loading/>
    </Box>
    )
  }


  if (!data) {
    return (
      <Box mt={5}>
        <Text>Veri yüklenemedi. Lütfen tekrar deneyin.</Text>
      </Box>
    );
  }

  
  const {text, options, answers} = data.questions_by_pk;

  return (

    <Box pl={3}>
      <Heading my={3}>{text}</Heading>
      {
        (!isVoted && answers.length < 1 ) ? (<Form options={options} setIsVoted={setIsVoted} id={id}/>) : (<Result id={id} />)
      }
    </Box>
  )
}

export default Detail

const styles = StyleSheet.create({})