import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, FlatList } from 'native-base'
import { useSubscription } from '@apollo/client';
import { Get_QUESTIONS_SUBSCRIPTIONS } from './queries';
import Loading from '../../../components/loading/index';
import Item from './Item';
import EmptyList from '../../../components/EmptyList/index';

const List = () => {
    const { data, loading, error } = useSubscription(Get_QUESTIONS_SUBSCRIPTIONS);

    if (loading) {
      return(
        <Box >
          <Loading />
        </Box>
      )
    }
  
    if (error) {
      return <Text>Error: {error.message}</Text>;
    }
  
    const renderItem = ({ item }) => (
      <Item item={item} />
    );
  
    return (
      <View style={styles.container}>
        {data.questions.length > 0 ? (
          <FlatList
          data={data.questions} // Gelen veriyi kullanıyoruz
          renderItem={renderItem} // Her bir öğe için render fonksiyonu
          keyExtractor={(item) => item.id.toString()} // Benzersiz anahtar
        />):(
        <EmptyList message={"No Surveys Yet"}/>
      )}
      </View>
    );
  };
  
  export default List;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
  });