import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box, Button, Heading, Input } from 'native-base'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

const Login = ({navigation}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
       navigation.replace("Home");
      }
    }
    );
    return unsubscribe;
  }, [])

  const handleSignUp = () => {
    if(!email || !password){
      return;
    }
    createUserWithEmailAndPassword(auth,email, password)
    .then((userCredentials)=>{
      const user = userCredentials.user;
      console.log("Registered with:", user.email);
    })
  .catch((error) => alert(error.message));
  };

  const handleSignIn = () => {
    if(!email || !password){
      return;
    }
    signInWithEmailAndPassword(auth,email, password)
    .then((userCredentials)=>{
      const user = userCredentials.user;
      console.log("Logged in with:", user.email);
    })
  }

  return (
    <Box p={6}>
       <Box mb={2}>
      <Heading>
                E-mail
      </Heading>
        <Input 
          value={email}
          onChangeText={setEmail} 
          placeholder='example@gmail.com' 
          fontSize={20} 
          borderColor="#686565" 
          mb={4} 
          autoCapitalize={'none'}
        />
     </Box>
     <Box my={2}>
      <Heading>
                  Password
        </Heading>
          <Input 
            value={password}
            onChangeText={setPassword} 
            placeholder='Enter Password' 
            fontSize={20} 
            borderColor={"blueGray.800"} 
            mb={4} 
            secureTextEntry
          />
          <Box mt={2}>
            <Button
            colorScheme={"emerald"}
            onPress={handleSignIn}
            >
              Login
            </Button>
            <Button
            mt={2}
            colorScheme={"indigo"}
            onPress={handleSignUp}
            >
              Register
            </Button>
          </Box>
     </Box>
    </Box>
  )
}

export default Login

const styles = StyleSheet.create({})