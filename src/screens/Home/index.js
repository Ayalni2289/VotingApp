import { Modal, StyleSheet, View,Text } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import List from './Questions/List';
import IconButton from '../../components/IconButton';
import AddNewModal from './Questions/AddNewModal';

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton icon_name={"add-outline"} onPress={() => setModalVisible((prev) => !prev)} />
      ),
      headerLeft: () => (
        <IconButton icon_name={"person-circle"} onPress={() => navigation.navigate('Profile')} />

      ),  
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <List />
      <Modal
        animationType="slide"
        visible={modalVisible}
        statusBarTranslucent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <AddNewModal closeModal={()=> setModalVisible(false)} />
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
});
