import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql', // TODO: Use environment variable
})

const authLink = setContext(async (_, { headers }) => {
  // Get the authentication token from AsyncStorage if it exists
  const token = await AsyncStorage.getItem('token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
