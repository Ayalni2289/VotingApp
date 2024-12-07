import { StyleSheet } from 'react-native';
import React from 'react';
import { Box, Button, Heading, Text } from 'native-base';
import {auth} from '../../firebase';

const Profile = ({navigation}) => {

  const handleSignOut = () => {
    auth.signOut()
    .then(() => navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    }))
    .catch((error) => {alert(error.message)});
    };


  return (
    <Box style={styles.container}>
      <Heading style={styles.title}>Welcome {auth.currentUser?.email}</Heading>
      <Button mt={5} onPress={handleSignOut} variant={'solid'} colorScheme={"rose"}>Sign Out</Button>
    </Box>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontWeight: 'bold',
    color: '#333',
  },
});
