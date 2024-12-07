import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSubscription } from '@apollo/client';
import { RESULTS_SUBSCRIPTION } from "../queries";
import Loading from "../../../components/loading";
import { Box, Divider } from 'native-base';
import Item from './item';

const Result = ({ id }) => {

  const { loading, data, error } = useSubscription(RESULTS_SUBSCRIPTION, {
    variables: { id },
  });

  if (loading) return <Loading />;

  if (error) return <Text style={styles.errorText}>Error loading results</Text>;

  if (!data || !data.questions_by_pk) {
    return <Text style={styles.notFoundText}>No results found for the given ID</Text>;
  }

  const { options } = data.questions_by_pk;
  const totalAnswers = options.reduce((total, item) => total + item.answers_aggregate.aggregate.count, 0);


  return (
    <Box p={3}>
      <Divider my={3} />
      {
        options.map((item) => (
          <Item key={item.id} item={item} total={totalAnswers} />
        ))
      }
    </Box>
  );
};

export default Result;

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  notFoundText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
});
