import { StyleSheet} from 'react-native';
import Router from './src/Router';
import { NativeBaseProvider } from 'native-base';
import { ApolloProvider } from '@apollo/client';
import client from './src/Apollo';


export default function App() {
  return (
    <NativeBaseProvider>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
